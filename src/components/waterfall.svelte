<script>
  export let words;
  export let longestWord;
  // index of last word
  let maxWords = words.length - 1;
  // index of current word
  let wordIndex = 0;
  setInterval(() => {
    if (wordIndex === maxWords) {
      wordIndex = 0;
    } else wordIndex++;
  }, 1500);
</script>

<div class="waterfall" style="width: {longestWord.length / 1.5}ch;">
  <!-- {#each words as word, i}
    {#if i === wordIndex}
      <p>
        <strong>
          {word}
        </strong>
      </p>
    {:else if i === wordIndex - 1}
      <p class="secondary">
        {word}
      </p>
    {:else if wordIndex + 1}
      <p class="secondary">
        {word}
      </p>
    {/if}
  {/each} -->
  <p class="secondary">
    {#if wordIndex > 0}
      {words[wordIndex - 1]}
    {:else}
      {words[maxWords]}
    {/if}
  </p>
  <p>
    <strong>
      {words[wordIndex]}
    </strong>
  </p>
  <p class="secondary">
    {#if wordIndex < maxWords}
      {words[wordIndex + 1]}
    {:else}
      {words[0]}
    {/if}
  </p>
</div>
