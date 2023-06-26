<script>
  export let words;
  export let longestWord;
  let maxWords = words.length - 1;
  let wordIndex = 0;
  setInterval(() => {
    if (wordIndex === maxWords) {
      wordIndex = 0;
    } else wordIndex++;
  }, 1500);
</script>

<div class="waterfall" style="width: {longestWord.length / 1.5}ch;">
  {#each words as word, i}
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
    {:else}
      <!-- else content here -->
    {/if}
  {/each}
</div>
