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
		<ul>
			<li></li>
		</ul>
	</div>
</template>

<script>
</script>

<style lang="scss">
	@import '../styles/common.scss';
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
</style>