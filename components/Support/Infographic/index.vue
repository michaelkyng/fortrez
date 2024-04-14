<template>
    <div class="flex w-full justify-between sm:justify-around py-20 sm:py-40 flex-container gap-y-10">
        <SupportInfographicCard 
        class="order-first"
        title="Providing maternal support for women during their pregnancy" 
        description="You can make a difference in the lives of pregnant women who can't afford support by donating one item at a time. Your generosity can have a big impact!"/>
        
        <SupportInfographicCard2 class="last"/>
        

        <SupportInfographicCard
        title="Empowering Disadvantaged Youth: Providing Essential Support"
        description="Whether you're a regular person, a family, or a group, you can help us by supporting our vocational training programs for marginalized youth."
        />
    </div>
</template>

<script setup>

</script>

<style scoped>
 @media (max-width: 392px) {
    .flex-container {
        flex-wrap: wrap;
        justify-content: center;
    }

    .last{
        order: 9999;
    }
}
</style>