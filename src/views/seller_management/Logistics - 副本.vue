<template>
  <div class="wuliu">
    <el-row class="block">
      <loading-mask v-if="!isRenderFinished"></loading-mask>
      <el-col :span="24">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="wuliu-form">
          <el-form-item label="物流模板" prop="storeShippingTemplateId">
            <el-select v-model="logisticsTemplateId" @change="selectHandle" placeholder="选择物流模板">
              <el-option label="新建物流模板" value="-1"></el-option>
              <template v-if="templateData.length">
                <el-option v-for="item in templateData" :label="item.templateName" :key="item.templateName" :value="item.storeShippingTemplateId">{{item.templateName}}</el-option>
              </template>
            </el-select>
            <el-button type="primary" @click="$router.push({path: '/seller-management/wuliu'})" v-if="isEditorStatus">新建物流模板</el-button>
          </el-form-item>
          <el-form-item label="模板名称" prop="templateName">
            <el-input v-model="ruleForm.templateName" :maxlength="20" style="width: 398px;"></el-input>
          </el-form-item>
          <el-form-item label="配送自提" prop="templateType">
            <el-radio-group v-model.number="ruleForm.templateType" @change="templateTypeChange">
              <el-radio :label="0">配送</el-radio>
              <el-radio :label="1">自提</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="配送范围及运费" prop="templateValueList" v-if="ruleForm.templateType == 0">
            <p class="desc">请编辑可送达的地区，当用户选择下述地区以外的配送地址时，将提示用户无法下单。</p>
            <div class="area-list">
              <template v-for="(item, key, index) in entireCountry">
<!--                 <div style="padding-left: 5px; color: #999">指定地区的运费：</div> -->
                <div class="area-list-wrap">
                  <div class="area-item" style="width: 218px"> 
                    <el-checkbox-group v-model="entireCountryChecked" @change="entireCountryChangeHandle">
                    <el-checkbox  label="全国">全国</el-checkbox>
                  </el-checkbox-group>
                  </div>
                  <div class="area-item">+运费</div>
                  <div class="area-item">
                    <input class="el-input__inner" type="text" v-model="item.shippingCost" name="" placeholder="" @keyup="inputChangeHandle($event, item.shippingCost)" style="width:80px">
                  </div>
                  <div class="area-item">元/件，满</div>
                  <div class="area-item">
                    <input class="el-input__inner" type="text" v-model="item.shippingLimitNum" name="" placeholder="" @keyup="inputChangeHandle($event, item.shippingLimitNum)" style="width:80px">
                  </div>
                  <div class="area-item">件</div>
                  <div class="area-item">
                    <input class="el-input__inner" type="text" v-model="item.shippingLimitCost" name="" placeholder="" @keyup="inputChangeHandle($event, item.shippingLimitCost)" style="width:80px">
                  </div>
                  <div class="area-item">元</div>
                </div>
              </template>
            </div>            
            <div class="area-list">
              <div style="padding-left: 5px; color: #999">指定其它地区的运费：</div>
              <template v-for="(item, index) in ruleForm.templateValueList" v-if="item.sysAreaCodes != '000000'" >
                
                <div class="area-list-wrap">
                  <div class="area-item"><el-input v-model="item.sysAreaNames.join(',')" style="width:208px" placeholder="浙江、江苏、上海" @focus="citySelectHandle(item, index)"></el-input></div>
                  <div class="area-item">+运费</div>
                  <div class="area-item">
                    <input class="el-input__inner" type="text" v-model="item.shippingCost" name="" placeholder="" @keyup="inputChangeHandle($event, item.shippingCost)" style="width:80px">
                  </div>
                  <div class="area-item">元/件，满</div>
                  <div class="area-item">
                    <input type="text" class="el-input__inner" v-model="item.shippingLimitNum" name="" placeholder="" @keyup="inputChangeHandle($event, item.shippingLimitNum)" style="width:80px">
                    
                  </div>
                  <div class="area-item">件</div>
                  <div class="area-item">
                    <input type="text" class="el-input__inner" v-model="item.shippingLimitCost" name="" placeholder="" @keyup="inputChangeHandle($event, item.shippingLimitCost)" style="width:80px">
                  </div>
                  <div class="area-item">元</div>
                  <div class="area-item" v-if="index"><el-button type="text" @click="onDelHandle(item, index)">删除</el-button></div>
                </div>
              </template>
              <el-button type="text" @click="onAddHandle">增加</el-button>
            </div>
          </el-form-item>
          <el-form-item label="自提描述" prop="title" v-if="ruleForm.templateType == 'ziti'">
            <p class="desc">请填写买家自提商品时，需要注意的事项。</p>
            <div class="area">
              <el-input
                type="textarea"
                :rows="3"
                placeholder="请输入内容"
                v-model="ruleForm.textarea">
              </el-input>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" :loading="submitLoading">保存</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    
    <el-dialog
      title="选择区域"
      :visible.sync="dialogVisible"
      size="small" @close="onDialogCancelHandle('dialogForm')">
        <el-form :model="dialogForm" :rules="dialogFormRules" ref="dialogForm" class="area-selection">
          <el-form-item label="" prop="checkedCities">
              <ul class="area-wrap">
                <el-checkbox-group v-model="dialogForm.checkedCities">
                  <li v-for="(value, key, index) in citiesMap">
                    <template v-if="value.checked">
                      <el-checkbox :label="key" v-if="checkedCitiesIndex != value.index" :key="value.name" disabled></el-checkbox>
                      <el-checkbox :label="key" v-else :key="key"></el-checkbox>
                    </template>
                    <el-checkbox :label="key" v-else :key="key"></el-checkbox>
                  </li>
                </el-checkbox-group>
              </ul>
            </el-checkbox-group>  
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="onConfirmHandle('dialogForm')">确 定</el-button>
        </span>
    </el-dialog>
  </div>

</template>

<script>

  import CitySelection from './components/CitySelection.vue'
  import AreaItem from './logistics_template/AreaItem.vue'
  import { getNewestTemplate, saveStoreShippingTemplate } from '@/api/seller'
  const win = window;
  const storeId = win.config && win.config.storeId ? win.config.storeId : ''
  export default {
    components: { CitySelection, AreaItem },
    data() {
      return {
        submitLoading: false,
        national: false,
        isRenderFinished: false,
        storeId: storeId,
        templateData: [],
        citiesMap: {},
        areaArr: [],
        checkedCitiesIndex: '',
        dialogForm: {
          checkedCities: []
        },
        logisticsTemplateId: '-1',
        isEditorStatus: false,
        dialogVisible: false,
        curViewData: {},
        entireCountryChecked: false,
        entireCountry:[{
          sysAreaCodes: '000000',
          shippingCost: '',
          shippingLimitNum: '',
          shippingLimitCost: '',
          sysAreaNames: ['全国']
        }],
        ruleForm: {
          templateValueList: [{
            sysAreaCodes: '',
            shippingCost: '',
            shippingLimitNum: '',
            shippingLimitCost: '',
            sysAreaNames: []
          }],//运费模板列表
          storeId: storeId,  //店铺ID
          templateName: '', //模板名称
          storeShippingTemplateId: '',//运费模板ID
          templateType: 0
        },
        rules: {
          templateName: [{
            required: true, message: '请输入模板名称', trigger: 'blur'
          }]
        },
        dialogFormRules: {
          checkedCities:[{
            required: false,
            message: '请选择城市'
          }]
        }
      }
    },
    computed: {

    },
    // watch: {
    //   '$route' (to, from) {
    //     // 对路由变化作出响应...
    //       console.log(to, from)
    //   }
    // },
    created () {
      this.initTemplateHandle()
    },
    methods: {
      templateTypeChange(value){
        console.log('模板类型选择',value)
        console.log(this.ruleForm)
      },
      inputChangeHandle(event, value){
        let reg = /^[1-9]\d*$/;
        event.target.value = value.replace(/\D/g,'')
      },  
      initTemplateHandle(){
      var self = this
      self.getNewestTemplateData(self.storeId, function(res){

        //判断是否存在区域
        if(res.area && res.area.length) {
          self.areaArr = res.area
          self.citiesMap = self.createAreaMpas() 
        }
        //判断是否有模板列表
        if(res.data && res.data.length) {
          self.templateData = res.data
          self.ruleForm = res.data[0]
          self.logisticsTemplateId = self.ruleForm.storeShippingTemplateId
          if(self.ruleForm.templateValueList && self.ruleForm.templateValueList.length) {
            self.initEntireCountry(res.data[0])
            self.initSelectedArea(self.ruleForm.templateValueList, self.citiesMap)
          }else {
            self.ruleForm.templateValueList = [self.defaultTemplate()]
          }
        }
 
        self.isRenderFinished = true     

      })
      },
      entireCountryChangeHandle(value){
        const self = this
        const h = self.$createElement
        
        var VNode = h('div', null, [
            h('div', null, '请确保你的商品可以配送到全国 '),
            h('div',{style: 'margin-top: 10px'}, [
              h('span', {style: 'color: #f60'}, '此运费将作为'),
              h('span', null, '除指定地区外，其余地区的默认运费')
              ]
            )
          ])
        var content = '<div></div><div>此运费将作为<span>除指定地区外，其余地区的默认运费。</span></div>'
        if(value){
          self.$msgbox({
            title: '温情提示',
            message: VNode,
            showCancelButton: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                self.entireCountryChecked = true
              } else {
                self.entireCountryChecked = false

              }
              done();
            }
          })
        }
      },
      initEntireCountry(data){
        var self = this
        var entireCountryChecked = false
        if(data.templateValueList && data.templateValueList.length) {
          for(var i=0; i<data.templateValueList.length; i++) {

            if(data.templateValueList[i].sysAreaCodes == '000000') {
              self.entireCountry[0] = data.templateValueList[i]
              entireCountryChecked = true
              break
            }
          }
        }

        if(!entireCountryChecked) {
          self.entireCountry[0] = {
            sysAreaCodes: '000000',
            shippingCost: '',
            shippingLimitNum: '',
            shippingLimitCost: '',
            sysAreaNames: ['全国']
          }
        }
        self.entireCountryChecked = entireCountryChecked
      },
      createAreaMpas(){
        var newArea = this.areaArr.concat()
        var citiesMap = this.createCityMap(newArea) 
        return citiesMap
      },
      onAddHandle (){
        var self = this
        self.ruleForm.templateValueList.push(self.defaultTemplate())
      },
      defaultTemplate(){
        var obj = {
          sysAreaCodes: '',
          shippingCost: '',
          shippingLimitNum: '',
          shippingLimitCost: '',
          sysAreaNames: []
        }
        return obj
      },
      onDelHandle (value, index) {
        var self = this
        if(value.sysAreaNames && value.sysAreaNames.length) {
          for(var i=0;i<value.sysAreaNames.length; i++) {
            if(value.sysAreaNames[i]){
              self.citiesMap[value.sysAreaNames[i]].checked=false
            }
            
          }          
        }

        self.ruleForm.templateValueList.splice(index, 1)
      },
      /**
       * selectHandle 选择器
       * @return {[type]} [description]
       */
      selectHandle (value) {

        this.citiesMap = this.createAreaMpas() 
        if(value == '-1') {
          this.ruleForm = {
            templateValueList: [{
              sysAreaCodes: '',
              shippingCost: '',
              shippingLimitNum: '',
              shippingLimitCost: '',
              sysAreaNames: []
            }],//运费模板列表
            storeId: storeId,  //店铺ID
            templateName: '', //模板名称
            storeShippingTemplateId: '',//运费模板ID
            templateType: 0
          }
          this.entireCountry[0] = {
            sysAreaCodes: '000000',
            shippingCost: '',
            shippingLimitNum: '',
            shippingLimitCost: '',
            sysAreaNames: ['全国']
          }
          this.entireCountryChecked = false
        }else {
          this.setRuleForm(value)
        }
      },
      setRuleForm (tid){
        var self = this
        var templateData = this.templateData.concat() 
        console.log('当前模板ID', tid)
        for(var i=0; i<templateData.length;i++) {
          if(tid == templateData[i].storeShippingTemplateId) {
            
            //判断是否有模板列表
              self.ruleForm = templateData[i]

              if(self.ruleForm.templateValueList && self.ruleForm.templateValueList.length) {
                self.initSelectedArea(self.ruleForm.templateValueList, self.citiesMap)
              }else {
                self.ruleForm.templateValueList = [self.defaultTemplate()]
              }
              self.initEntireCountry(self.ruleForm)
            }
            //this.ruleForm = templateData[i]
        }

        console.log(self.ruleForm.templateValueList)
      },
      /**
       * createCityMap 初始化area数据结构，用于记录用户所选择的area
       * @param  { Array } cityList area list
       * @return { Object }       area Object
       */
      createCityMap (cityList){

        let self = this;
        var obj = {}
        if(cityList.length) {
          for(var i=0;i<cityList.length;i++) {
            if(cityList[i].areaName !== '全国') {
              obj[cityList[i].areaName] = {
                checked: false,
                index: '',
                areaCode: cityList[i].areaCode,
                areaName: cityList[i].areaName
              }              
            }
          }
        }

        return obj
      },
      /**
       * initSelectedArea 根据用户已选area来初始化数据
       * @param  { Array } templateValueList 用户已保存的物流模板信息
       * @return {[type]}                   [description]
       */
      initSelectedArea (templateValueList, maps){
        var areaMaps = null
        var self = this
        if(templateValueList && templateValueList.length) {
          for(var i=0;i<templateValueList.length;i++) {
            if(templateValueList[i]['sysAreaCodes']) {
              var areaArr = []
              var arr = self.formartArr(templateValueList[i]['sysAreaCodes'])

              for(var j=0;j<arr.length;j++) {
                var areaName = self.getAreaName(arr[j], maps)
                
                var obj = {
                  areaCode: arr[j],
                  index: i,
                  areaName: areaName
                }
                areaMaps = self.addSelectArea(areaName, i, maps)
                areaArr.push(obj.areaName)
              }
              templateValueList[i].sysAreaNames = areaArr
            }
          }
        }
        if(areaMaps) {
          self.citiesMap = areaMaps
        }else {
          self.citiesMap = maps
        }
        
      },
      addSelectArea (areaName, index, maps){
        for(var obj in maps) {
          if(maps[obj].areaName == areaName) {
            maps[obj].checked = true
            maps[obj].index = index
          }
        }
        return maps;
      },
      getAreaName(code, maps){
        for(var obj in maps) {
          if(code == maps[obj].areaCode) {
            return maps[obj].areaName
          }
        }
      },
      formartArr (str){
        if(str){
          return str.split(',')
        }
      },
      getNewestTemplateData (storeId, callback){
        var self = this
          getNewestTemplate({
            storeId: storeId
          }).then((res)=>{

            if(res.data.code === 0) {
              callback(res.data.data)
            }
          })
      },
      /**
       * citySelectHandle 模板城市选择
       * @param  { Object } row 运费模板对象
       * @return {[type]}     [description]
       */
      citySelectHandle (row, index){
        this.dialogForm.checkedCities = row.sysAreaNames
        this.checkedCitiesIndex = index
        this.dialogVisible = true
      },
      /**
       * onConfirmHandle 弹窗确认事件
       * @param  { String } formName 表单对象
       * @return {[type]}          [description]
       */
      onConfirmHandle (formName){
        let self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            self.updateCityMap()
            self.dialogVisible = false

          } else {
            console.log('error submit!!');
            return false;
          }
        });

      },
      updateCityMap (){
        let self = this
        let checkedCities = self.dialogForm.checkedCities
        let checkedCitiesIndex = self.checkedCitiesIndex
        let citiesMap = self.citiesMap
        self.ruleForm.templateValueList[checkedCitiesIndex].sysAreaNames = checkedCities

        if(checkedCities.length) {
          for(var i=0;i<checkedCities.length; i++) {
            self.addSelectArea(checkedCities[i], checkedCitiesIndex, citiesMap)
          }
        } else {
          this.resetCitiesMap(citiesMap)
        }
      },
      resetCitiesMap(citiesMap){
        for (var obj in citiesMap){
          citiesMap[obj]['checked'] = false
          citiesMap[obj]['index'] = ''
        }
      },
      /**
       * onDialogCancelHandle 弹窗关闭时的响应事件，重置表单
       * @param  {[type]} formName [description]
       * @return {[type]}          [description]
       */
      onDialogCancelHandle (formName){
        this.$refs[formName].resetFields();
      },
      /**
       * submitForm 表单提交
       * @param  { String } formName 表单对象名称 ruleForm
       * @return {[type]}          [description]
       */
      submitForm (formName){
        let self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.saveTemplateData()
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      saveTemplateData (){
        var self = this
        var submitData = self.getSumbitData()
        var formartSubmitData = self.formartSubmitData(submitData)

        self.submitLoading = true
        saveStoreShippingTemplate(formartSubmitData).then((res)=>{
          if(res.data.code === 0) {
            self.submitLoading = false
            self.$message({
              message: '物流模板保存成功！',
              type: 'success'
            });
            self.initTemplateHandle()
          }else {
            self.$message({
              message: '物流模板保存失败，请重新尝试。',
              type: 'warning'
            });  
            self.submitLoading = true          
          }
        })
        
      },
      formartSubmitData (submitData){
        var jsonSubmitData = JSON.stringify(submitData)
        var newData = JSON.parse(jsonSubmitData)
        var self = this

        if(newData.templateType == 0 && self.entireCountryChecked) {
          newData.templateValueList.push(self.entireCountry[0])
        }
        return newData
      },
      getSumbitData(){
        var self = this
        var ruleForm = self.ruleForm 
        var obj = {
          storeId: ruleForm.storeId,
          storeShippingTemplateId: ruleForm.storeShippingTemplateId,
          templateName: ruleForm.templateName,
          templateType: ruleForm.templateType
        }
        if(ruleForm.templateType === 1) {
          obj.templateValueList = null
        }else if(ruleForm.templateType === 0) {
          var templateValueList = ruleForm.templateValueList
          var citiesMap = self.citiesMap
          for(var i=0; i < templateValueList.length;i++) {
            if(templateValueList[i].sysAreaNames.length){
              var areaCodeArr = [] 
              for(var j=0; j<templateValueList[i].sysAreaNames.length; j++) {
                var areaObj = citiesMap[templateValueList[i].sysAreaNames[j]]
                if(areaObj){
                  areaCodeArr.push(areaObj.areaCode)
                }
              }
              templateValueList[i].sysAreaCodes = areaCodeArr.join(',')
            }
          }  
          obj.templateValueList = ruleForm.templateValueList
        }

        return obj
      },

      /**
       * resetForm 重置表单
       * @param  { String } formName 表单对象名称
       * @return {[type]}          [description]
       */
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss">
  .area-list-wrap {
    .area-del {
      color: #67d5cd;
      &:hover {

      }
    }
  }
  .el-input__inner {
    
  }
</style>