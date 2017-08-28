<template>
	<div class="invoiceNumber">
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
		<div class="invoiceBox">
			<div class="invoice_wallet fl">
				<img src="../assets/logo.png"/>
				<div>票夹</div>
			</div>
			<div class="collect_invoice fr">
				<img src="../assets/logo.png"/>
				<div>收票</div>
			</div>
		</div>
		<div class="title">
			<div class="fl">收票应用</div>
			<div class="fr edit">更多</div>
		</div>
		<div class="dis_flex">
			<div class="invoiceItem" v-for='item in arr'>
		      <collectinvoice :msg=item></collectinvoice>
		    </div>
	    </div>
	</div>
</template>

<script>
	import Collectinvoice from '@/components/Collectinvoice'
	export default{
		name:'aaa',
		data(){
			return{
				isActive:'main',
				arr:['aa','bb','cc','dd'],
				msg:''
			}
		},
		components:{
			Collectinvoice
		}
	}
</script>

<style>
	@mixin display_flex($direction){
		display: flex;
		flex-direction: $direction;
	}
	
	.dis_flex{
		@include display_flex(row)
	}
	.invoiceItem{
		flex: 1;
		img{
			width: 0.72rem;
			height: 0.6rem;
			display: block;
			margin: 0 auto 0.36rem auto;
		}
		p{
			font-size: 0.34rem;
			color: #28292F;
		}
	}
	div.invoiceNumber{
		.invoice_Number{
			width: 100%;
			height: 2.10rem;
			padding-top:0.28rem;
			box-sizing: border-box;
			border-bottom:0.06rem solid #F8F8F9;
			p{
				font-size: 0.26rem;
				color: #939497;
				text-align: center;
			}
			
		}
	}
	.numberBox {
		width: 6.06rem;
		height: auto;
		overflow: hidden;
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
		height: auto;
		overflow: hidden;
		font-size: 0.34rem;
		color: #28292F;
	}
	.edit{
		font-size: 0.3rem;
		color: #FF8F00;
	}
	.fl{float: left;}
	.fr{float: right;}
	.invoiceBox{
		height: 2.52rem;
		width: 100%;
		padding: 0.26rem 0;
		box-sizing: border-box;
		font-size: 0.32rem;
		color: #28292F;
		border-bottom: 0.2rem solid #F8F8F9;
		>div{
			width: 50%;
			height: 100%;
			box-sizing: border-box;
		}
		img{
			width: 1.2rem;
			height: 1rem;
			display: block;
			margin: 0 auto 0.41rem auto;
		}
		.invoice_wallet{
			border-right: 1px solid #E9EDF8;
		}
	}
</style>