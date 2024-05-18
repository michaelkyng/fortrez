<template>
  <div class="flex flex-col gap-y-8 w-full">
    <h3 :class="subHeading2">Donations</h3>
        <div class="flex flex-col gap-y-4">
            <div class="overflow-x-auto sm:menu-scroll">
                <table class="w-full border-collapse text-sm md:text-base">
                    <thead>
                    <tr class="bg-black/5 text-left">
                        <th class="p-4 sm:p-6">Donor</th>
                        <th class="p-4 sm:p-6">Comment</th>
                        <th class="p-4 sm:p-6">Amount</th>
                        <th class="p-4 sm:p-6">Currency</th>
                        <th class="p-4 sm:p-6">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(transaction, index) in entries" :key="index" class=" even:bg-slate-300/20 odd:bg-transparent">
                        <td class="p-4 sm:p-6 w-fit text-nowrap">{{ transaction.donor }}</td>
                        <td class="p-4 mr-4 md:mr-0 sm:p-6 w-fit">
                        <UPopover mode="hover" :popper="{ placement: 'top-start', arrow: true }">
                
                            <span class="max-w-28 sm:max-w-96 text-nowrap overflow-x-auto truncate line-clamp-1">{{ transaction.comment }}</span>
                            <template #panel>
                            <div class="p-4 bg-white-dim text-accent">
                                <Placeholder class="h-20 w-48 text-wrap">
                                {{ transaction.comment }}
                                </Placeholder>
                            </div>
                            </template>
                        </UPopover>
                        </td>
                        <td class="p-4 sm:p-6 w-fit text-nowrap">{{ transaction.amount }}</td>
                        <td class="p-4 sm:p-6 w-fit text-nowrap">{{ transaction.currency }}</td>
                        <td class="p-4 sm:p-6 w-fit text-nowrap">{{ transaction.date }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="!fullView" class="flex justify-end">
                <ButtonLink :to="`/projects/f/donation/${project.title}`" class="my-2" name="View More"/>
            </div>

            <div v-else class="flex w-full justify-center">
                <UPagination 
                @click="$emit('change',currentPage)"
                v-model="currentPage"
                class="mx-auto bg-transparent" 
                :max="3" size="lg" :total="project.transactions.length" show-last show-first 
                :active-button="{variant : 'ghost',color : 'yellow'}"
                :inactive-button="{variant : 'ghost',color : 'black'}"
                :first-button="{variant : 'ghost',color : 'black'}"
                :last-button="{variant : 'ghost',color : 'black'}"
                :next-button="{variant : 'ghost',color : 'black'}"
                :prev-button="{variant : 'ghost',color : 'black'}"
                 >
                    

                </UPagination>
            </div>
        </div>
  </div>
</template>

<script lang="ts" setup>
import {ChevronRightIcon, ChevronLeftIcon} from "@heroicons/vue/solid";

const {project,entries} = defineProps(['project', 'entries' ,'fullView']);
const {containerWidth, subHeading, subHeading2, transition} = useTailwindConfig();

const currentPage = ref(1)
defineEmits(['change'])


</script>