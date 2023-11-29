<script setup lang="ts">
const { xmlDoc } = useSettings();

const tei = xmlDoc.value?.cloneNode(true) as Element;

tei.querySelector("tei-teiHeader")?.remove();
tei.querySelector("tei-back")?.remove();

const replace = (node: Element, from: string, to: string) => {
  const newNode = document.createElement(to);

  const attributes = node.attributes;
  for (let i = 0; i < attributes.length; i++) {
    newNode.setAttribute(attributes[i].name, attributes[i].value);
  }

  const children = node.childNodes;

  Array.from(children).forEach(function (el: any) {
    newNode.appendChild(el);
  });

  node.replaceWith(newNode);

  return newNode;
};

let elements = ["tei-date", "tei-persName", "tei-placeName"];

for (const element of elements) {
  const targets = tei.querySelectorAll(element);
  for (const target of targets) {
    replace(target, element, "tei-seg");
  }
}

elements = ["*[hand='#viaf24602065']"];

for (const element of elements) {
  const targets = tei.querySelectorAll(element);

  for (const target of targets) {
    const note = document.createElement("tei-note");
    note.setAttribute("style", "background-color: #FFEB3B; color: black");
    note.textContent = target.textContent;
    note.setAttribute("note", "ゲーテ自筆部分");
    target.textContent = "";
    target.appendChild(note);
  }
}
</script>
<template>
  <div class="pa-4 text">
    <TeiNode :node="tei"></TeiNode>
  </div>
</template>
<style>
.text p::first-letter {
  font-size: 200%; /* この値はお好みに応じて調整してください */
  float: left;
  padding-right: 5px;
  line-height: 1;
}
</style>
<style scoped>
* {
  _font-family: "UnifrakturMaguntia", cursive;
  font-family: "UnifrakturCook", cursive;
}
</style>
