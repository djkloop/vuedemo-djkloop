<template>
	<div id="Loading_box">
		<div class="spinner" id="Loading">
			<div class="double-bounce1"></div>
			<div class="double-bounce2"></div>
			<span>页面有数据正在加载...</span>
		</div>
	</div>
</template>
<style>
	.spinner {
		width: 80px;
		height: 80px;
		position: relative;
		margin: 100px auto;
	}
	
	.spinner span {
		display: block;
		width: 180px;
		text-align: left;
		margin: 100px auto;
		margin-left: -35px;
		font-size: 16px;
		color: #F5F5F5;
	}
	
	#Loading {
		position: fixed;
		top: 40%;
		left: 45%;
		z-index: 1002;
		
	}
	
	#Loading_box {
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		background-color: #000;
		-moz-opacity: 0.8;
		opacity: 0.8;
		z-index: 1001;
		filter: alpha(opacity=80);
	}
	
	.double-bounce1,
	.double-bounce2 {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: #67CF22;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-animation: bounce 2.0s infinite ease-in-out;
		animation: bounce 2.0s infinite ease-in-out;
		z-index: 9999;
	}
	
	.double-bounce2 {
		-webkit-animation-delay: -1.0s;
		animation-delay: -1.0s;
	}
	
	@-webkit-keyframes bounce {
		0%,
		100% {
			-webkit-transform: scale(0.0)
		}
		50% {
			-webkit-transform: scale(1.0)
		}
	}
	
	@keyframes bounce {
		0%,
		100% {
			transform: scale(0.0);
			-webkit-transform: scale(0.0);
		}
		50% {
			transform: scale(1.0);
			-webkit-transform: scale(1.0);
		}
	}
</style>