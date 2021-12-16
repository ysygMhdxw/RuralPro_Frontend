<template>
  <div class="home">
    <div>
      <PerGDPGraph style="width: 800px;height: 600px"/>
    </div>
    <div style="width: 1000px;width: 600px">
      <GDPGraph style="width: 800px;height: 600px"/>
    </div>
    <div>
      <PopulationGraph style="height: 600px;width: 800px"/>
    </div>

  </div>
</template>

<script>

import PerGDPGraph from "@/components/Graph/PerGDPGraph";
import GDPGraph from "@/components/Graph/GDPGraph";
import PopulationGraph from "@/components/Graph/PopulationGraph";
export default {
  name: 'CountyEcharts',
  components: {
    PopulationGraph,
    GDPGraph,
    PerGDPGraph,

  }
}
</script>
<style>

</style>
