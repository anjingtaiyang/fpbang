<template>
	<div class="waitforinvoice">
		<div class="moduletitle dis_flex">
			<div><img src="../assets/logo.png"/></div>
			<div class="titlename">待开</div>
			<div></div>
		</div>
		<div class="box88">
			<div class="numberforhistory">历史所有 <span>100</span> 张</div>
		</div>
		<div class="box88 dis_flex mt10">
			<div class="money">金额<span>¥100.00</span></div>
			<span class="fgline"></span>
			<div class="taxmoney">税额<span>100.00</span></div>
		</div>
		<div id="scroll">
			<ul class="invoicelist">
				<li>
					<div class="invoice_info">
						<div class="companyname">百望股份有限公司百望股份有限公司百望股份有限公司百望股份有限公司百望股份有限公司百望股份有限公司</div>
						<div class="dis_flex">
							<div class="money">
								¥100.00
							</div>
							<div class="invoicetype">
								<span>电子发票</span>
								<span class="time">2017/08/08 12:30</span>
							</div>
						</div>
					</div>
					<div class="imgbox">
						<img src="../assets/logo.png"/>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
		    	return { 
		    		selected: 'collectInvoice',
		    		tabbar:[
			    		{id:'collectInvoice',tabbarname:'收票',href:'#/tabbar/makeoutinvoice'},
					{id:'makeoutInvoice',tabbarname:'开票',href:'#/tabbar/makeoutinvoice'},
					{id:'workBench',tabbarname:'工作台',href:'#/tabbar/work'},
					{id:"message",tabbarname:'消息',href:'#/tabbar/makeoutinvoice'},
					{id:"mine",tabbarname:'我的',href:'#/waitforinvoice'}
		    		],
		    	}
		},
		watch: {
		    	selected: function (val, oldVal) {
		        console.log(val)
		    }
		},
		mounted(){
//			var scroll = new iScroll("scroll", {
//				    hScroll:false,
//					hScrollbar: false,
//					vScrollbar: false
//			});
//			$('#scroll').height('400');
//			scroll.refresh()
	},
//		loadTop() {
//			alert('1')
//		  this.$refs.loadmore.onTopLoaded();
//		},
//		loadBottom() {
//			alert()
//		  this.allLoaded = true;
//		  this.$refs.loadmore.onBottomLoaded();
//		}
	}
	
</script>

<style lang="scss">
	@import '../styles/common.scss';
	.waitforinvoice{
		height:100%;
	}
	.moduletitle{
		background: white;
		div{
			width: 1rem;
		}
	}
	#scroll {
		height: 4rem;
		overflow: hidden;
	}
	.box88{
		height: 0.88rem;
		line-height:0.88rem;
		width: 100%;
		box-sizing: border-box;
		background: white;
		padding: 0 0.3rem;
		.numberforhistory{
			@include fonts($ft26,#1C2438);
			border-bottom:1px solid #E9EAEC;
			height: 0.88rem;
			span{
				@include fonts($ft40,#495060);
				position:relative;
				top:0.04rem;
				margin-left:0.3rem;
				
			}
		}
		.money,.taxmoney{
			flex: 1;
			@include fonts($ft26,#1C2438);
			span{
				margin-left:0.27rem;
				@include fonts($ft28,#0079CC);
			}
		}
		.fgline {
			width: 0.06rem;
			display: inline-block;
			background: #E9EDF8;
			height: 0.3rem;
			position: relative;
			top: 0.29rem;
			margin-right: 0.25rem;
		}
	}
	.invoicelist{
		background: white;
		height: auto;
		padding: 0 0.3rem;
		box-sizing: border-box;
		overflow: hidden;
		li{
			width: 100%;
			height: auto;
			overflow: hidden;
			min-height: 1.2rem;
			@include display_flex(row);
			border-bottom:1px solid #E9EAEC;
			.invoice_info{
				flex: 1;
				.companyname{
					@include fonts($ft32,#1C2438);
					margin: 0.1rem 0 0.2rem 0;
				}
				.money{
					@include fonts($ft26,#0079CC);
					flex: 1;
				}
				.invoicetype{
					flex: 1;
					@include display_flex(row);
					@include fonts($ft24,#495060);
					.time{
						@include fonts($ft24,#9EA7B4);
						margin-left: 0.2rem;
					}
				}
			}
			.imgbox{
				width: 0.44rem;	
				position: relative;
				img{
					width: 0.15rem;
					height: 0.26rem;	
					@include positoncenter;
					left: 0.26rem;
				}
			}
		}
	}
</style>