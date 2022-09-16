<script>
  import { cAdjectives, whatILike } from "../components/data";
  import Waterfall from "../components/waterfall.svelte";
  import pakFlag from "./../components/pak-flag.gif";
</script>

<main>
  <h1>Hi there!</h1>
  <h2>I'm <strong>Abban Fahim</strong></h2>
  <h2 dir="rtl">اسمي <strong>ابان فهيم</strong></h2>
  <h4 class="flexCentred big-pad">I'm a <Waterfall words={cAdjectives} /> coder</h4>
  <h4 class="flexCentred big-pad" style="justify-content: flex-end;">I also like <Waterfall words={whatILike} /></h4>
  <h4>
    A Proud Pakistani <img src={pakFlag} width="256" alt="gif of Pak flag" />
  </h4>
</main>
