<template>
	<div class="invoiceNumber">
		<div class="moduletitle dis_flex">
			<div>
				<img src="../assets/logo.png"/>
			</div>
			<div class="titlename">
				工作台
			</div>
			<div>
				<img src="../assets/logo.png"/>
			</div>
		</div>
		<div class="invoice_Number">
			<p>百望云电子发票开票量</p>
			<div class="numberBox">
				<div class="number"><span>1111111111111111</span>张</div>
			</div>
		</div>
		<div class="title">
			<div class="fl">快捷应用</div>
			<div class="fr edit">编辑</div>
		</div>
		<div class="invoiceBox dis_flex">
			<div class="invoice_Item" v-for='item in shortcuts'>
				<applications :menu=item></applications>
			</div>
		</div>
		<div class="title">
			<div class="fl">收票应用</div>
			<div class="fr more">更多</div>
		</div>
		<div class="dis_flex">
			<div class="invoiceItem" v-for='item in applicationList'>
		      <applications :menu=item></applications>
		    </div>
	    </div>
	</div>
</template>

<script>
	import Applications from '@/components/Applications'
	import Moduletitle from '@/components/Moduletitle'
	export default{
		name:'aaa',
		data(){
			return{
				applicationList:['票夹','收票','查验','认证'],
				shortcuts:['票夹','收票'],
				title:'工作台'
			}
		},
		components:{
			Applications,
			Moduletitle
		}
	}
</script>

<style lang="scss">
	@import '../styles/common.scss';
	.invoiceBox{
		text-align: center;
		height: 2.52rem;
		width: 100%;
		padding: 0.26rem 0;
		box-sizing: border-box;
		border-bottom: 0.2rem solid #F8F8F9;
		img{
			width: 1.2rem;
			height: 1rem;
			display: block;
			margin: 0 auto 0.41rem auto;
		}
		.invoice_Item{
			border-right: 1px solid #E9EDF8;
			height: 100%;
			flex: 1;
			box-sizing: border-box;
			div{
				@include fonts($ft32, $color28292F)
			}
			&:last-of-type{
				border-right: none;
			}
		}
	}
	.invoiceItem{
		text-align: center;
		flex: 1;
		img{
			width: 0.72rem;
			height: 0.6rem;
			display: block;
			margin: 0.38rem auto 0.36rem auto;
		}
		div{
			@include fonts($ft34,$color28292F);
			margin-bottom: 0.5rem;
		}
	}
	div.invoiceNumber{
		background: white;
		text-align: center;
		.invoice_Number{
			width: 100%;
			height: 2.10rem;
			padding-top:0.28rem;
			box-sizing: border-box;
			border-bottom:0.06rem solid #F8F8F9;
			p{
				@include fonts($ft26,$color939497)
				text-align: center;
			}
			
		}
	}
	.numberBox {
		@include heightauto()
		width: 6.06rem;
		min-height: 0.6rem;
		background: #0079CC;
		box-shadow: 0 10px 20px 0 rgba(0, 121, 204, 0.20);
		border-radius: 67px;
		margin: 0.23rem auto;
		color: #FFFFFF;
		letter-spacing: 0;
		.number {
			line-height: 0.6rem;
			font-size: 0.24rem;
			span{
				font-size: 0.32rem;
				position: relative;
				top: 0.03rem;
				right: 0.2rem;
			}
		}
		
	}
	.title{
		padding: 0 0.3rem;
		height: 0.88rem;
		line-height: 0.88rem;
		@include heightauto();
		@include fonts($ft34, $color28292F)
	}
	.edit{
		@include fonts($ft30, $colorFF8F00)
	}
	.more{
		@include fonts($ft30, #0079CC)
	}
	
</style>