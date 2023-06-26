<script>
    import { cAdjectives, whatILike } from "../components/data";
    import Waterfall from "../components/waterfall.svelte";
    import BcGif from "../components/bru.gif";
</script>

<main>
    <h1>Hi there!</h1>
    <h2>I'm <strong>Abban Fahim</strong></h2>
    <h2 dir="rtl">اسمي <strong>ابان فهيم</strong></h2>
    <h4 class="flexCentred big-pad">
        I'm a <Waterfall longestWord="cloistered" words={cAdjectives} /> coder
    </h4>
    <h4 class="flexCentred big-pad" style="justify-content: flex-end;">
        I also like <Waterfall
            longestWord="setting ambitious goals"
            words={whatILike}
        />
    </h4>
    <div class="flexCentred" style="justify-content: space-around;">
        <h4>I'm a Robotics Engineer</h4>
    </div>
    <div class="flexCentred" style="justify-content: space-around;">
        <h4>And a founder of <strong>Bruh Corp.</strong></h4>
        <img src={BcGif} alt="" />
    </div>
</main>
