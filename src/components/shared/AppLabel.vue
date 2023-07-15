<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  props: {
    color: {
      type: String,
      default: '#000'
    },
    size: {
      type: Number,
      default: 15
    }
  },
  render() {
    return h('div', {
      class: 'rounded-full',
      style: {
        background: this.color,
        width: `${this.size}px`,
        height: `${this.size}px`,
      }
    });
  }
});
</script>