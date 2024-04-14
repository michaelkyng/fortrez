<template>
  <div class="relative space-y-20">
    <ProjectsItemCard 
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :completed="project.completed"
            :funded="project.funded"
            :target="project.target"
    />

    <ProjectsItemContent/>
    
  </div>
</template>

<script lang="ts" setup>
  const {containerWidth, subHeading} = useTailwindConfig();
  
  const project = ref({
        title: 'Nourishing vulnerable children',
        description: "Providing both food and care for orphans and other vulnerable kids out there is super important. There are so many vulnerable kids out there who really need our support. It's heartwarming to think about the positive impact we can make in their lives. Let's spread love and kindness together!",
        image: '/images/projectImage1.png',
        completed: false,
        funded: 650000.77,
        target: 2000000
  })
</script>
