<script>
  export let words;
  let maxWords = words.length - 1;
  let wordIndex = 0;
  setInterval(() => {
    if (wordIndex === maxWords) {
      wordIndex = 0;
    } else wordIndex++;
  }, 1500);
</script>

<div class="waterfall">
  <p class="secondary">
    {wordIndex === maxWords ? words[0] : words[wordIndex + 1]}
  </p>
  <p>
    <strong>
      {words[wordIndex]}
    </strong>
  </p>
  <p class="secondary">
    {wordIndex === 0 ? words[maxWords] : words[wordIndex - 1]}
  </p>
</div>
