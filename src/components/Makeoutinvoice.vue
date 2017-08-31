<template>
<div>
	<div class="makeoutinvoice">
		<div class="moduletitle dis_flex">
			<div></div>
			<div class="titlename">开票</div>
			<div><img src="../assets/logo.png"/></div>
		</div>
		<div class="invoiceKind">
			<div class="fl">开票种类</div>
			<div class="fr">电子发票 <img class="next" src="../assets/logo.png"/></div>
		</div>
		<div class="customerInformation">
			<div class="customer">
				<div>客户信息</div>
				<div>展开</div>
			</div>
			<ul class="information">
				<li v-for="item in customer1">
					<span><img class="require" src="../assets/logo.png"/></span>
					<div>
						<label for="">{{item.label}}</label>
						<input type="text" :placeholder=item.placeholder name="" id="" value="" />
						<div class="delete"><img src="../assets/logo.png"/></div>
					</div>
				</li>
				<li v-for="item in customer2" style="height: 1.2rem;display:none">
					<span><img class="require" src="../assets/logo.png"/></span>
					<div style="height: 1.2rem;">
						<label for="">{{item.label}}</label>
						<textarea rows="2"  :placeholder=item.placeholder name="" id="" value=""></textarea>
						<div class="delete"><img src="../assets/logo.png"/></div>
					</div>
				</li>
			</ul>
		</div>
		<div class="selecttax dis_flex">
			<div>
				<div class="label">是否含税</div>
				<mt-radio v-model="value" :options="['含税', '不含税']">
				</mt-radio>
			</div>
		</div>
		<div class="projectInformation">
			<div class="project">
				<div>商品信息</div>
				<div>
					<span class="open">展开</span>
					<span class="fg">|</span>
					<span class="del">删除</span>
				</div>
			</div>
			<ul class="information" v-for="item in product">
				<li>
					<span><img class="require" src="../assets/logo.png"/></span>
					<div>
						<label for="">商品名称</label>
						<input type="text" placeholder="请输入商品名称" name="" id=""  :value=item.name />
						<div class="delete"><img src="../assets/logo.png"/></div>
					</div>
				</li>
				<li>
					<span><img class="require" src="../assets/logo.png"/></span>
					<div>
						<label for="">商品金额</label>
						<input type="text" placeholder="请输入商品金额" name="" id="" :value=item.money />
						<div class="delete"><img src="../assets/logo.png"/></div>
					</div>
				</li>
			</ul>
		</div>
		<div class="addProject">
			添加商品
		</div>
	</div>
	<div class="makeInvoice">
		<div class="priceTax">价税合计 <span>¥100.00</span></div>
		<div class="preview">预览</div>
		<div class="make">立即开票</div>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
				customer1:[
				{label:'客户名称',placeholder:'请输入客户名称'},
				{label:'购方税号',placeholder:'请输入购方税号'},
				{label:'手机号码',placeholder:'请输入手机好吗'}
				],
				customer2:[
				{label:'地址、电话',placeholder:'请输入地址电话'},
				{label:'开户行及账号',placeholder:'请输入开户行及账号'}
				],
				product:[
					{name:'办公文具',money:'199.99'}
				],
				value:'含税'
			}
		}
	}
</script>
<style lang="scss">
	@import '../styles/common.scss';
	.mint-cell-wrapper,.mint-cell:last-child{
		background-image:none;
		height: 1rem;
	}
	.mint-cell:last-child{
		height: 0.98rem;
	}
	.mint-radiolist{
		display: flex;
		flex-direction: row;
		position: relative;
		.mint-radiolist-title{
			display: none;
		}
	}
	.mint-radio-label{
		font-size: 0.28rem;
	}
	.selecttax{
		height: 1rem;
		background: white;
		padding: 0 0.3rem;
		@include fonts($ft30,$color28292F);
		margin:0.1rem 0;
		.label{line-height: 1rem;margin-right:0.1rem}
		>div{
			width: 100%;
			@include display_flex(row);
			border-bottom: 1px solid #E9EDF8;
		}
	}
	.next{
		width: 0.15rem;
		height: 0.26rem;
		vertical-align: top;
		position: relative;
		top: 0.37rem;
		margin-left: 0.33rem;
	}
	.makeoutinvoice{
		position: absolute;
		top: 0;
		bottom: 57px;
		width: 100%;
		padding-bottom: 1rem;
		overflow: scroll;
		.moduletitle{
			background: white;
			div{
				width: 1rem;
			}
		}
		.invoiceKind{
			background: white;
			height: 1rem;
			padding: 0 0.3rem;
			line-height: 1rem;
			margin-bottom: 0.1rem;
			@include fonts($ft30,$color28292F);
			.fr{
				color: $color0079CC;
			}
		}
	}
	.customerInformation,.projectInformation{
		background: white;
		.customer,.project{
			height: 1.2rem;
			line-height: 1.2rem;
			padding: 0 0.3rem;
			@include display_flex(row);
			border-bottom: 1px solid #E9EDF8;
			>div{
				flex: 1;
				@include fonts($ft40,$color28292F)
				&:last-of-type{
					text-align: right;
					@include fonts($ft30,$color0079CC)
				}
				span{
					display: inline-block;
					margin: 0 0.46rem;
					&:last-of-type{
						margin-right: 0;
					}
					
				}
				.fg{
					margin: 0 0;
					color: #535971;
				}
			}
		}
		.del{
			@include fonts($ft30,#F44336)
		}
		.information{
			padding: 0 0.3rem 0 0;
			li{ 
				@include display_flex(row);
				span{
					display: block;
					width: 0.3rem;
					text-align: center;
					img.require{
						width: 0.14rem;
						height: 0.14rem;
						vertical-align: top;
						position: relative;
						top: 0.35rem;
					}
				}
				>div{
					flex: 1;
					border-bottom: 1px solid #E9EDF8;
					height: 0.88rem;
					line-height: 0.88rem;
					@include display_flex(row);
					label{
						@include fonts($ft30,#1C2438);
						margin-right: 0.5rem;
					}
					input,textarea{
						flex: 1;
						height: 0.88rem;
						@include fonts(0.28rem,#495060);
					}
					textarea{
						position: relative;
					    top: 0.2rem;
					}
					.delete{
						width: 0.7rem;
						height: 0.88rem;
						text-align: center;
						img{
							width: 0.28rem;
							height: 0.28rem;
							vertical-align: top;
							position: relative;
							top: 0.3rem;
						}
						
					}
				}
			}
		}
	}
	.addProject{
		width: 100%;
		height: 0.6rem;
		background: white;
		@include fonts($ft32,$color0079CC);
		text-align: center;	
		line-height: 0.6rem;
		margin: 0.1rem 0 0.26rem;	
	}
	.makeInvoice{
		width:100%;
		background: white;
		height: 1rem;
		line-height: 1rem;
		position: absolute;
		bottom: 57px;
		@include fonts($ft28,#495060);
		@include display_flex(row);
		text-align:center;
		.priceTax{
			flex: 1;
			border-right: 0.01rem solid #DDDEE1;
			span{
				color: #0079CC;
				font-weight:600;
			}
		}
		.preview{
			width: 2rem;
			@include fonts($ft30,$color0079CC);
			
		}
		.make{
			width: 2rem;
			@include fonts($ft32,#ffffff);
			background: #0079CC;
		}
	}
</style>