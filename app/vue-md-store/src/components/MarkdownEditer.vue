<template>
    <div class="wrapper">
        <textarea class="column" v-model="markdown" autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="outline: none;" ></textarea>
        <div class="column hide"  v-html="html"></div>
    </div>
    
    <!--
    <div class="tool-bar">
        <a title="元に戻す" data-i18n="[title]toolbar.undo" tabindex="-1" class="fa fa-undo ui-editor-toolbar-undo"></a>
        <a title="やり直し" data-i18n="[title]toolbar.redo" tabindex="-1" class="fa fa-repeat ui-editor-toolbar-redo"></a>
        <i class="separator">|</i>
        <a title="太字" data-i18n="[title]toolbar.bold" tabindex="-1" class="fa fa-bold ui-editor-toolbar-bold"></a>
        <a title="斜体" data-i18n="[title]toolbar.italic" tabindex="-1" class="fa fa-italic ui-editor-toolbar-italic"></a>
        <a title="取消線" data-i18n="[title]toolbar.strikethrough" tabindex="-1" class="fa fa-strikethrough ui-editor-toolbar-strikethrough hidden-xs"></a>
        <a title="見出し" data-i18n="[title]toolbar.heading" tabindex="-1" class="fa fa-header ui-editor-toolbar-heading"></a>
        <i class="separator">|</i>
        <a title="コード" data-i18n="[title]toolbar.code" tabindex="-1" class="fa fa-code ui-editor-toolbar-code"></a>
        <a title="引用" data-i18n="[title]toolbar.quote" tabindex="-1" class="fa fa-quote-left ui-editor-toolbar-quote hidden-sm hidden-xs"></a>
        <a title="順序なしリスト" data-i18n="[title]toolbar.generic-list" tabindex="-1" class="fa fa-list-ul ui-editor-toolbar-unordered-list"></a>
        <a title="順序付きリスト" data-i18n="[title]toolbar.numbered-list" tabindex="-1" class="fa fa-list-ol ui-editor-toolbar-ordered-list"></a>
        <a title="チェックリスト" data-i18n="[title]toolbar.check-list" tabindex="-1" class="fa fa-check-square ui-editor-toolbar-check-list"></a>
        <i class="separator">|</i>
        <a title="リンク挿入" data-i18n="[title]toolbar.create-link" tabindex="-1" class="fa fa-link ui-editor-toolbar-link"></a>
        <a title="画像挿入" data-i18n="[title]toolbar.insert-image" tabindex="-1" class="fa fa-picture-o ui-editor-toolbar-image">
            <span class="btn-file"><label aria-label="Insert Image"><input type="file" accept="image/*" name="upload" multiple=""></label></span>
        </a>
        <a title="表挿入" data-i18n="[title]toolbar.insert-table" tabindex="-1" class="fa fa-table ui-editor-toolbar-table hidden-xs"></a>
        <a title="平行線挿入" data-i18n="[title]toolbar.insert-horizontal-line" tabindex="-1" class="fa fa-minus ui-editor-toolbar-horizontal-line hidden-sm hidden-xs"></a>
        <a title="コメント挿入" data-i18n="[title]toolbar.leave-comment" tabindex="-1" class="fa fa-comment-o ui-editor-toolbar-comment"></a>
        <span class="table-tools hidden-xs" style="margin-right: 10px; display: none;">
            <i class="separator" style="margin-right: 10px;">|</i>
            <span data-i18n="toolbar.row">行</span>
            <a title="行を挿入" data-i18n="[title]toolbar.insert-row" tabindex="-1" class="fa fa-plus-circle ui-editor-toolbar-insert-row"></a>
            <a title="行を削除" data-i18n="[title]toolbar.delete-row" tabindex="-1" class="fa fa-minus-circle ui-editor-toolbar-delete-row"></a>
            <a title="行を上方向にシフト" data-i18n="[title]toolbar.move-row-up" tabindex="-1" class="fa fa-long-arrow-up ui-editor-toolbar-move-row-up"></a>
            <a title="行を下方向にシフト" data-i18n="[title]toolbar.move-row-down" tabindex="-1" class="fa fa-long-arrow-down ui-editor-toolbar-move-row-down"></a>
            <i class="separator" style="margin-right: 10px;">|</i>
            <span data-i18n="toolbar.column">列</span>
            <a title="列を挿入" data-i18n="[title]toolbar.insert-column" tabindex="-1" class="fa fa-plus-circle ui-editor-toolbar-insert-column"></a>
            <a title="列を削除" data-i18n="[title]toolbar.delete-column" tabindex="-1" class="fa fa-minus-circle ui-editor-toolbar-delete-column"></a>
            <a title="列を左方向にシフト" data-i18n="[title]toolbar.move-column-left" tabindex="-1" class="fa fa-long-arrow-left ui-editor-toolbar-move-column-left"></a>
            <a title="列を右方向にシフト" data-i18n="[title]toolbar.move-column-right" tabindex="-1" class="fa fa-long-arrow-right ui-editor-toolbar-move-column-right"></a>
            <i class="separator" style="margin-right: 10px;">|</i>
            <span data-i18n="toolbar.alignment">揃え</span>
            <a title="左に揃え" data-i18n="[title]toolbar.align-left" tabindex="-1" class="fa fa-align-left ui-editor-toolbar-align-left"></a>
            <a title="中央に揃え" data-i18n="[title]toolbar.align-center" tabindex="-1" class="fa fa-align-center ui-editor-toolbar-align-center"></a>
            <a title="右に揃え" data-i18n="[title]toolbar.align-right" tabindex="-1" class="fa fa-align-right ui-editor-toolbar-align-right"></a>
            <a title="揃え解除" data-i18n="[title]toolbar.align-none" tabindex="-1" class="fa fa-ban ui-editor-toolbar-align-none"></a>
        </span>
    </div>
    -->
    
</template>


<script setup>
import { ref, watch } from 'vue';
import MarkdownIt from 'markdown-it';

const markdown = ref('');
const html = ref('');

const convertMarkdownToHtml = () => {
    const md = new MarkdownIt();
    html.value = md.render(markdown.value);
};

watch(markdown, convertMarkdownToHtml);

</script>

<style scoped>

.column {
    background-color: lightgreen
}

@media all and (min-width: 300px) {
    .wrapper {
        display: flex;
    }
  
    .column {
        flex-grow: 1;
    }
}

</style>
