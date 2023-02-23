<template>
    <div>
        <p> medium-button样式</p>
        <div class="medium-button">
            <t-button type="primary" size="medium">主要按钮</t-button>
            <t-button type="success" size="medium">成功按钮</t-button>
            <t-button type="info" size="medium">信息按钮</t-button>
            <t-button type="warning" size="medium">警告按钮</t-button>
            <t-button type="danger" size="medium">危险按钮</t-button>
            <br />
            <br />
            <t-button type="primary" size="medium" round>主要按钮</t-button>
            <t-button type="success" size="medium" round>成功按钮</t-button>
            <t-button type="info" size="medium" round>信息按钮</t-button>
            <t-button type="warning" size="medium" round>警告按钮</t-button>
            <t-button type="danger" size="medium" round>危险按钮</t-button>

        </div>

        <p>small-button样式</p>
        <div class="small-button">
            <t-button type="primary" size="small">主要按钮</t-button>
            <t-button type="success" size="small">成功按钮</t-button>
            <t-button type="info" size="small">信息按钮</t-button>
            <t-button type="warning" size="small">警告按钮</t-button>
            <t-button type="danger" size="small">危险按钮</t-button>
            <br />
            <br />
            <t-button type="primary" size="small" round>主要按钮 </t-button>
            <t-button type="success" size="small" round>成功按钮</t-button>
            <t-button type="info" size="small" round>信息按钮</t-button>
            <t-button type="warning" size="small" round>警告按钮</t-button>
            <t-button type="danger" size="small" round>危险按钮</t-button>
        </div>

        <p>mini-button样式</p>
        <div class="mini-button">
            <t-button type="primary" size="mini">主要按钮</t-button>
            <t-button type="success" size="mini">成功按钮</t-button>
            <t-button type="info" size="mini">信息按钮</t-button>
            <t-button type="warning" size="mini">警告按钮</t-button>
            <t-button type="danger" size="mini">危险按钮</t-button>
            <br />
            <br />
            <t-button type="primary" size="mini" round>主要按钮 </t-button>
            <t-button type="success" size="mini" round>成功按钮</t-button>
            <t-button type="info" size="mini" round>信息按钮</t-button>
            <t-button type="warning" size="mini" round>警告按钮</t-button>
            <t-button type="danger" size="mini" round>危险按钮</t-button>
        </div>
        <p> 禁用格式</p>
        <div class="disabled">
            <t-button type="primary" disabled>主要按钮</t-button>
            <t-button type="success" disabled>成功按钮</t-button>
            <t-button type="info" disabled>信息按钮</t-button>
            <t-button type="warning" disabled>警告按钮</t-button>
            <t-button type="danger" disabled>危险按钮</t-button>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
p{
  padding: 20px 40px 20px;
}
.medium-button{
  // display: inline-block;
  margin-bottom: 15px;
  padding: 20px 40px 20px;
  // t-Button {
  //   display: inline-block;
  // }
}
.small-button {
  margin-bottom: 15px;
  padding: 20px 40px 20px;
}

.mini-button {
  margin-bottom: 15px;
  padding: 20px 40px 20px;
}

.disabled {
  margin-bottom: 15px;
  padding: 20px 40px 20px;
}
</style>
