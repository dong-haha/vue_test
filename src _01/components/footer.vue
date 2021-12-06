<template>
    <footer>
        <span>&copy; 2021 designed by dong</span>
        <span class="footer-link" >location: Wuhan,China</span>
        <span class="footer-link">Contact me:   Email: 2621888799@qq.com</span>
        <a href="./help.html" class="footer-link" target="_blank">Help</a>

    </footer>

</template>

<script>
export default {
            name:'Footer',
            data(){
			return {
			}
		},
		methods: {
		}
        } 
</script>

<style>
    footer {
        padding: 24.72px 64.27px;
        color: rgba(255, 255, 255, 0.75);
        background-color: rgb(36, 52 , 86);
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: row;
    }
    .footer-link {
        color: inherit;
        margin-left: 100px;
    }
    .footer-link:hover {
        color: white;
    }   

</style>