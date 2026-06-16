
<template>
<nav class="w-full px-36 flex justify-between items-center bg-[#E9CBF2]">
            <div class="w-20">
        <AppLogo />
        </div>
        <SearchBar />
        <ActionIcon />
        <UserMenu />
        <CartWidget />
    </nav>
</template>

<script setup>
import AppLogo from '@/components/common/AppLogo.vue';
import ActionIcon from '@/components/common/marketer/navbar/ActionIcon.vue';
import CartWidget from '@/components/common/marketer/navbar/CartWidget.vue';
import SearchBar from '@/components/common/marketer/navbar/SearchBar.vue';
import UserMenu from '@/components/common/marketer/navbar/UserMenu.vue';






</script>

<style lang="scss" scoped>

</style>