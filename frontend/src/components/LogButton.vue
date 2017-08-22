<template lang="pug">
  button.log-button(:class=`{
    'log-button__default': type === 'default',
    'log-button__success': type === 'success',
    'log-button__warning': type === 'warning',
    'log-button__primary': type === 'primary',
  }`, @click='onClick')
    slot
</template>

<script>
export default {
  name: 'log-button',
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style scoped lang="less">
.log-button {
  display: inline-block;
  padding: 0.5rem;
  border: 0;
  margin: 0;
  font-weight: 200;
  cursor: pointer;
  outline: none;
}

.set-log-button (@color, @bgcolor) {
  background-color: @bgcolor;
  color: @color;
  &:hover {
    background-color: darken(@bgcolor, 10%);
  }
  &:active {
    background-color: darken(@bgcolor, 15%);
  }
}

.log-button__default {
  .set-log-button(black, #787878);
}

.log-button__success {
  .set-log-button(white, #95c76f);
}

.log-button__warning {
  .set-log-button(white, #d28e5d);
}

.log-button__primary {
  .set-log-button(white, #00aba5);
}
</style>

