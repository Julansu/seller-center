<template>
  <div class="uploadpic">
    <div class="load_hezi">
      <p>{{note}}</p>
        <el-upload
          :class="{ 'avatar-uploader': true, 'picSuc': url}"
          action="http://gss.dmp.hzjiehun.bid/gss/upload/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :on-error='handleAvatarError'
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <img v-if="url" :src="url" class="avatar1">
          <i v-else class="iconfont icon-tianjiajiahaowubiankuang">
            <p>添加上传图片</p>
          </i>
          <div class="btn">重新上传</div>
          
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt=""/>
        </el-dialog>
    </div>
  </div>
</template>
<!-- 17682309067 -->

<script>
export default {
  name: 'UploadPictures',
  props: {
    uploadtit:{
      type: String,
      default: ''
    },
    note: {
      type: String,
      default: ''
    },
    listen:{
      type: String,
      default: ''
    },
    url:{
      type: String,
      default: ''
    },
    picSize:{
      type: String,
      default: ''
    }
  },
  data () {
    return {
      imageUrl: '',
      dialogImageUrl: '',
      dialogVisible: false,
    }
  },
  mounted(){
    if(this.url==''){
      this.imageUrl='';
    }
  },
  methods: {
    beforeAvatarUpload(file){
        var sizes=this.picSize;
        var isTrue=false;
        var sizeArr=sizes.split(".");

        if(sizeArr[1]=="MB"){//判断图片大小单位是kb还是mb
          isTrue=file.size / 1024 / 1024 < sizeArr[0];
        }else{
          isTrue= file.size / 1024<sizeArr[0];
        }

        const isUpload =/(jpg|jpeg|png)$/.test(file.type);

        if(!isUpload){
          this.$message.error('上传头像图片只能是 JPG、JPEG、PNG 格式!');
        }
        if (!isTrue) {
          this.$message.error('上传头像图片大小不能超过 '+sizeArr[0]+sizeArr[1]+'!');
        }
        return isUpload && isTrue;
      },

    handleAvatarSuccess(res, file) {
      if(res.code==0){
        this.imageUrl = URL.createObjectURL(file.raw);
        this.$emit(this.listen,res.data);//传递值给父组件
      }else{
        this.$message.error('图片上传失败');
      }
      
    },
    //上传失败时的回调
    handleAvatarError(){
      this.$message.error('图片上传失败');
    },

    revise(src){
      this.imageUrl=src;
    },
    ser(){
      this.url='';
    }

    
  }
}
</script>

<style lang="scss">
.uploadpic{
  p{
    margin:0;
    font-size: 12px;
    color: #999999;
  }
  .avatar-uploader{
    height:100px;
  }
  .icon-tianjiajiahaowubiankuang{
    padding-top:23px;
    width:100px;
    height:100px;
    line-height:30px;
    font-size: 28px;
    color: #41CAC0;
    text-align:center;
    display:block;
    p{
      font-size:14px;
      color:#666;
      padding-top:10px;

    }

  }
  .el-upload--text{
    width:100px;
    height:100px;
    img{
      width:100%;
      height:100%;
    }
  }
  .picSuc{
    width:100px;
     
  }
  .picSuc:hover .btn{
    display:block;
  }
  .btn:hover{
    color:#fff;
    display:block;
  }

  .btn{
    display:none;
    height:24px;
    line-height: 24px;
    background:rgba(0,0,0,0.40);
    color:#fff;
    position:absolute;
    bottom:0;
    left:0;
    width:100px;
    font-size:12px;
    padding:0;
    border-radius: 0;
  }

}
.el-upload-list__item{
  width:100px !important;
  height:100px !important;
}
.el-progress--circle,.el-progress-circle{
  width:100px !important;
  height:100px !important;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.load_hezi .picSuc .el-upload{
  border-style:solid;
}
.avatar-uploader .el-upload:hover {
  border-color: #41cac0;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

</style>
