<template>
	<div class="cycg wid_ove" style="width: 100%;height: auto;overflow: hidden;">
		<div style="height: 331.173px;">
			<div id="invoice-context" class="invoice-context" scale="0.16031121751025992" style="transform: scale(0.160311) translateX(438.6px);">
				<img class="invoice-img" src="../images/vat_invoice_template.png">
				<div class="title">
					<div class="region ">
						北京增值税电子普通发票
						<p class="hr"></p>
						发票联
					</div>
					<img class="executiveStamp" src="../images/zhang.png" />
				</div>
				<img class="qrCode" src="../images/erweima.png" />
				<span class="isRed"></span>
				<div class="buyer">
					<span class="buyerName"><i class=" break" style="font-size: 21.6px;">lishuo</i></span>
					<span class="buyerTaxNumber"></span>
					<span class="buyerAddress"><i class=" break" style="font-size: 21.6px;"></i></span>
					<span class="buyerAccount"><i class=" break" style="font-size: 21.6px;"></i></span>
				</div>
				<span class="machineNumberTitle">机器编号：</span>
				<span class="machineNumber">499111005205</span>
				<span class="invoiceCode">050003523457</span>
				<span class="invoiceNumber">99422338</span>
				<span class="date_year">2016</span>
				<span class="date_month">9</span>
				<span class="date_day">20</span>
				<span class="checksum">15690110085546140175</span>
				<span class="cipher">
	                    <p>03-956*+/0++3128+80/*/55/266</p>
	                    <p>-&lt;+/+38770/&lt;29-96&gt;-14552&gt;777</p>
	                    <p>46-956*+/0++3128+82*38/+269-</p>
	                    <p>4&lt;5936+73901&gt;855192/7&lt;*&lt;&gt;&gt;2+</p>
	            </span>
				<div class="productList">
					<div class="product">
						<span class="name"><i class=" break" style="font-size: 21.6px;">门票</i></span>
						<span class="model"><i class=" break" style="font-size: 21.6px;"></i></span>
						<span class="unit"><i class=" break" style="font-size: 21.6px;"></i></span>
						<span class="quantity"><i class=" break" style="font-size: 21.6px;"></i></span>
						<span class="unitPrice"><i class=" break" style="font-size: 21.6px;"></i></span>
						<span class="priceAmount">100.00</span>
						<span class="taxRate"><i class=" break" style="font-size: 21.6px;">3%</i></span>
						<span class="taxAmount">3.00</span>
					</div>
				</div>
				<span class="totalPriceAmount">¥100.00</span>
				<span class="totalTaxAmount">¥3.00</span>
				<span class="totalPriceAndTaxInCapital">壹佰零叁元整</span>
				<span class="totalPriceAndTax">¥103.00</span>
				<div class="supplier">
					<span class="supplierName"><i class=" break" style="font-size: 21.6px;">百望税控14</i></span>
					<span class="supplierTaxNumber">91500000747150346A</span>
					<span class="supplierAddress"><i class=" break" style="font-size: 21.6px;">地址10000001</i></span>
					<span class="supplierAccount"><i class=" break" style="font-size: 21.6px;">中行499099991291</i></span>
				</div>
				<span class="note"></span>
				<span class="payee"></span>
				<span class="reviewer"></span>
				<span class="drawer">ycy</span>
				<img class="signature" src="../images/zhang1.png" />
			</div>
		</div>
	</div>
</template>
<style lang="scss">
	@import '../styles/previewChromeStyle.scss';
	body{
		background: white;
	}
</style>
<script>
		export default{
			name:'invoicedetail',
			mounted(){
				
			}
		}
</script>