<script>
export default {
  name: 'BTFooterCopyright',
};
</script>

<template>
  <section class="footer-copyright">
    <p>Учебный проект выполнен в рамках курсовой работы для
      <a
        href="https://synergy.ru/"
        target="_blank"
      >
        Synergy
      </a>
    </p>
    <p>Студент: <b>Елманов Ю.А.</b></p>
    <p>Группа: <b>ВБИО-301</b></p>
    <p>Исходники расположены на
      <a
        href="https://github.com/YurikEz/yurikez.github.io/tree/master/book-trade"
        target="_blank"
      >
        GitHub
      </a>
    </p>
  </section>
</template>

<style lang="scss" scoped>
.footer-copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  
  p {
    width: 100%;
    font-size: 12px;
    line-height: 1;
    color: var(--footerText);
    margin: 0.25rem auto;
  }
  
  a {
    text-decoration: none;
    color: var(--linkText);
    
    transition: opacity 0.2s ease-in-out;
    will-change: opacity;
    
    &:hover,
    &:focus-within {
      opacity: 0.7;
    }
  }
}
</style>