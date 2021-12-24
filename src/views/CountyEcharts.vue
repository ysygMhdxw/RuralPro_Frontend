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
  <div>
      <ProvinceGross style="height: 600px;width: 800px"/>
    </div>
 <div>
      <ProvinceThreeMainIndustries style="height: 600px;width: 800px"/>
    </div>
    <div>
      <ProvincePublicBudget style="height: 600px;width: 800px"/>
    </div>
    <div>
      <ProvincePublicPerBudget style="height: 600px;width: 800px"/>
    </div> <div>
      <ProvinceperGross style="height: 1200px;width: 900px"/>
    </div>
  </div>
</template>

<script>

import PerGDPGraph from "@/components/Graph/PerGDPGraph";
import GDPGraph from "@/components/Graph/GDPGraph";
import PopulationGraph from "@/components/Graph/PopulationGraph";
import ProvinceGross from "@/components/Graph/ProvinceGross";
import ProvinceThreeMainIndustries from "@/components/Graph/ProvinceThreeMainIndustries";
import ProvincePublicBudget from "@/components/Graph/ProvincePublicBudget";
import ProvincePublicPerBudget from "@/components/Graph/ProvincePublicPerBudget";
import ProvinceperGross from "@/components/Graph/ProvinceperGross";
export default {
  name: 'CountyEcharts',
  components: {
    ProvinceperGross,
    ProvincePublicPerBudget,
    ProvincePublicBudget,
    ProvinceThreeMainIndustries,
    ProvinceGross,
    PopulationGraph,
    GDPGraph,
    PerGDPGraph,

  }
}
</script>
<style>

</style>
