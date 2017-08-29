<template>
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
				<li v-for="item in customer2" style="height: 1.2rem;">
					<span><img class="require" src="../assets/logo.png"/></span>
					<div style="height: 1.2rem;">
						<label for="">{{item.label}}</label>
						<textarea rows="2"  :placeholder=item.placeholder name="" id="" value=""></textarea>
						<div class="delete"><img src="../assets/logo.png"/></div>
					</div>
				</li>
			</ul>
		</div>
		<div class="customerInformation">
			<div class="customer">
				<div>商品信息</div>
				<div>
					<span class="open">展开</span>
					<span class="fg">|</span>
					<span class="del">删除</span>
				</div>
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
				<li v-for="item in customer2">
					<span><img class="require" src="../assets/logo.png"/></span>
					<div>
						<label for="">{{item.label}}</label>
						<input type="text" :placeholder=item.placeholder name="" id="" value="" />
						<div class="delete"><img src="../assets/logo.png"/></div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'',
		data(){
			return{
				customer1:[
				{label:'客户名称',placeholder:'请输入客户名称'},
				{label:'购方税号',placeholder:'请输入购方税号'},
				{label:'客户名称',placeholder:'请输入客户名称'},
				{label:'购方税号',placeholder:'请输入购方税号'}
				],
				customer2:[
				{label:'地址、电话',placeholder:'请输入地址电话'},
				{label:'开户行及账号',placeholder:'请输入开户行及账号'}
				],
			}
		},
	}
</script>
<style>
	@import '../styles/common.scss';
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
	.customerInformation{
		background: white;
		.customer{
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
		.open{
			
		}
		
		
	}
	
</style>