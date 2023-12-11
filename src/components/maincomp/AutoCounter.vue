<template>
    <div  ref="target">{{ counter }}</div>
</template>

<script>

export default {
    props: {
        data: Number,
    },
    data(){
        return {
            counter: 0
        }
    },

  methods: {
    handleIntersection(entries){
        if (entries[0].isIntersecting){
            // this.counter++
            this.runCounter()
            // console.log("ghg")
        }
    },
    async runCounter(){
        let x = this.data;
        let t = 1;
        let jump = x/ (t * 10);
        let timer = x / (t * 1000);
         console.log(timer)
        for (let index = 0; index <= x; index = index + jump ) {
            await this.sleep(100).then(() => {
                this.counter  = index;
            })
        }
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
  },

  mounted(){
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    };
    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.target)
  }
}
</script>

<style scoped></style>