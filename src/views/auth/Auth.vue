<template>
  <h1>Welcome to the Super App</h1>
  <router-link class="btn btn-primary mr-1" to="/auth/login">Login</router-link>
  <router-link class="btn btn-primary" to="/auth/register"
    >Register</router-link
  >
  <router-view></router-view>
</template>
