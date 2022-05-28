<style>

  blockquote.blockquote  {
    padding-left: 12px;
    color: #a26af6;
    font-weight: bold;
    line-height: 1.2;
    background: #161b22;
    border-left: 4px solid #a26af6;
    border-radius: 7px;
    white-space: pre;
  }

  span {
    letter-spacing: 1px;
  }

  span.folder {
    color: yellow;
  }

  span.file {
    color: orangered;
  }
</style>

# Cтруктура файлов

<blockquote class='blockquote'>
  <span class='folder'>project</span>
  ┃
  ┣━ <span class='folder'>publick</span>
  ┃    ┗━ <span class='file'>index.html</span>
  ┃
  ┣━ <span class='folder'>src</span>
  ┃    ┃
  ┃    ┣━ <span class='folder'>conponents</span>
  ┃    ┃    ┃
  ┃    ┃    ┣━ <span class='folder'>ui</span>
  ┃    ┃    ┃    ┣━ <span class='file'>Example1.ui.jsx</span>
  ┃    ┃    ┃    ┣━ <span class='file'>Example1.ui.css</span>
  ┃    ┃    ┃    ┃
  ┃    ┃    ┃    ┣━ <span class='file'>Example2.ui.jsx</span>
  ┃    ┃    ┃    ┣━ <span class='file'>Example2.ui.css</span>
  ┃    ┃    ┃    ┃
  ┃    ┃    ┃    ┗━ <span class='file'>index.js</span>
  ┃    ┃    ┃
  ┃    ┃    ┗━ <span class='folder'>Example1</span>
  ┃    ┃            ┣━ <span class='file'>Example1.component.jsx</span>
  ┃    ┃            ┗━ <span class='file'>Example1.component.css</span>
  ┃    ┃
  ┃    ┣━ <span class='folder'>layout</span>
  ┃    ┃    ┣━ <span class='file'>Layout.jsx</span>
  ┃    ┃    ┗━ <span class='file'>Layout.css</span>
  ┃    ┃
  ┃    ┃
  ┃    ┣━ <span class='folder'>pages</span>
  ┃    ┃    ┣━ <span class='file'>Example1.page.jsx</span>
  ┃    ┃    ┣━ <span class='file'>Example1.page.css</span>
  ┃    ┃    ┃
  ┃    ┃    ┣━ <span class='file'>Example2.page.jsx</span>
  ┃    ┃    ┣━ <span class='file'>Example2.page.css</span>
  ┃    ┃    ┃
  ┃    ┃    ┗━ <span class='file'>index.js</span>
  ┃    ┃
  ┃    ┣━ <span class='folder'>styles</span>
  ┃    ┃    ┣━ <span class='file'>global.css</span>
  ┃    ┃    ┣━ <span class='file'>index.css</span>
  ┃    ┃    ┗━ <span class='file'>App.css</span>
  ┃    ┃
  ┃    ┣━ <span class='file'>App.jsx</span>
  ┃    ┗━ <span class='file'>index.js</span>
  ┃
  ┣━ <span class='file'>.gitignore</span>
  ┣━ <span class='file'>LICENSE</span>
  ┣━ <span class='file'>package-loock.json</span>
  ┣━ <span class='file'>package.json</span>
  ┗━ <span class='file'>README.md</span>

</blockquote>