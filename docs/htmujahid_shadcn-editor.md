├── .gitignore
├── .prettierignore
├── README.md
├── app
    ├── (app)
    │   ├── (root)
    │   │   ├── page.tsx
    │   │   └── section.tsx
    │   ├── blocks
    │   │   ├── [...categories]
    │   │   │   └── page.tsx
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── docs
    │   │   ├── [[...slug]]
    │   │   │   └── page.tsx
    │   │   └── layout.tsx
    │   └── layout.tsx
    ├── (view)
    │   └── view
    │   │   └── [name]
    │   │       └── page.tsx
    ├── layout.tsx
    └── og
    │   ├── geist-regular-otf.json
    │   ├── geist-semibold-otf.json
    │   ├── geistmono-regular-otf.json
    │   └── route.tsx
├── components.json
├── components
    ├── active-theme.tsx
    ├── analytics.tsx
    ├── announcement.tsx
    ├── block-display.tsx
    ├── block-image.tsx
    ├── block-viewer.tsx
    ├── blocks-nav.tsx
    ├── blocks
    │   └── editor
    │   │   ├── editor.tsx
    │   │   ├── nodes.ts
    │   │   └── plugins.tsx
    ├── callout.tsx
    ├── cards
    │   ├── activity-goal.tsx
    │   ├── calendar.tsx
    │   ├── chat.tsx
    │   ├── cookie-settings.tsx
    │   ├── create-account.tsx
    │   ├── exercise-minutes.tsx
    │   ├── forms.tsx
    │   ├── index.tsx
    │   ├── payment-method.tsx
    │   ├── payments.tsx
    │   ├── report-issue.tsx
    │   ├── share.tsx
    │   ├── stats.tsx
    │   └── team-members.tsx
    ├── chart-code-viewer.tsx
    ├── chart-copy-button.tsx
    ├── chart-display.tsx
    ├── chart-toolbar.tsx
    ├── charts-nav.tsx
    ├── code-block-command.tsx
    ├── code-collapsible-wrapper.tsx
    ├── code-tabs.tsx
    ├── color-format-selector.tsx
    ├── color-palette.tsx
    ├── color.tsx
    ├── colors-nav.tsx
    ├── command-menu.tsx
    ├── component-preview-tabs.tsx
    ├── component-preview.tsx
    ├── component-source.tsx
    ├── component-wrapper.tsx
    ├── components-list.tsx
    ├── copy-button.tsx
    ├── docs-breadcrumb.tsx
    ├── docs-copy-page.tsx
    ├── docs-sidebar.tsx
    ├── docs-toc.tsx
    ├── examples-nav.tsx
    ├── github-link.tsx
    ├── icons.tsx
    ├── lo-fi
    │   ├── accordion.tsx
    │   ├── alert.tsx
    │   ├── atom.tsx
    │   ├── component.tsx
    │   └── index.tsx
    ├── main-nav.tsx
    ├── mobile-nav.tsx
    ├── mode-switcher.tsx
    ├── nav-header.tsx
    ├── nav-user.tsx
    ├── open-in-v0-button.tsx
    ├── open-in-v0-cta.tsx
    ├── page-header.tsx
    ├── page-nav.tsx
    ├── site-footer.tsx
    ├── site-header.tsx
    ├── tailwind-indicator.tsx
    ├── theme-customizer.tsx
    ├── theme-provider.tsx
    └── theme-selector.tsx
├── content
    └── docs
    │   ├── (root)
    │       ├── index.mdx
    │       ├── installation.mdx
    │       └── meta.json
    │   ├── meta.json
    │   └── plugins
    │       ├── actions.mdx
    │       ├── actions
    │           ├── clear-editor.mdx
    │           ├── counter-character.mdx
    │           ├── edit-mode-toggle.mdx
    │           ├── import-export.mdx
    │           ├── markdown-toggle.mdx
    │           ├── max-length.mdx
    │           ├── share-content.mdx
    │           ├── speech-to-text.mdx
    │           └── tree-view.mdx
    │       ├── auto-embed.mdx
    │       ├── auto-focus.mdx
    │       ├── autocomplete.mdx
    │       ├── code.mdx
    │       ├── collapsible.mdx
    │       ├── component-picker-menu.mdx
    │       ├── context-menu.mdx
    │       ├── drag-drop-paste.mdx
    │       ├── draggable-block.mdx
    │       ├── emoji.mdx
    │       ├── equation.mdx
    │       ├── excalidraw.mdx
    │       ├── floating-text-format.mdx
    │       ├── hashtag.mdx
    │       ├── horizontal-rule.mdx
    │       ├── image.mdx
    │       ├── index.mdx
    │       ├── inline-image.mdx
    │       ├── keywords.mdx
    │       ├── layout.mdx
    │       ├── link.mdx
    │       ├── markdown.mdx
    │       ├── mention.mdx
    │       ├── page-break.mdx
    │       ├── poll.mdx
    │       ├── rich-text-editor.mdx
    │       ├── tab-focus.mdx
    │       ├── table.mdx
    │       ├── toolbar.mdx
    │       ├── toolbar
    │           ├── block-format-toolbar.mdx
    │           ├── clear-formatting-toolbar.mdx
    │           ├── element-format-toolbar.mdx
    │           ├── font-color-toolbar.mdx
    │           ├── font-family-toolbar.mdx
    │           ├── font-format-toolbar.mdx
    │           ├── font-size-toolbar.mdx
    │           ├── history-toolbar.mdx
    │           ├── link-toolbar.mdx
    │           └── subsuper-toolbar.mdx
    │       └── typing-pref.mdx
├── eslint.config.mjs
├── hooks
    ├── use-colors.ts
    ├── use-config.ts
    ├── use-copy-to-clipboard.ts
    ├── use-is-mac.ts
    ├── use-media-query.tsx
    ├── use-meta-color.ts
    ├── use-mounted.ts
    └── use-mutation-observer.ts
├── lib
    ├── blocks.ts
    ├── colors.ts
    ├── config.ts
    ├── docs.ts
    ├── events.ts
    ├── fonts.ts
    ├── highlight-code.ts
    ├── registry.ts
    ├── rehype.ts
    ├── source.ts
    ├── themes.ts
    └── utils.ts
├── mdx-components.tsx
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
    ├── android-chrome-192x192.png
    ├── android-chrome-512x512.png
    ├── apple-touch-icon.png
    ├── avatars
    │   └── shadcn.jpg
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── favicon.ico
    ├── file.svg
    ├── globe.svg
    ├── next.svg
    ├── opengraph-image.png
    ├── placeholder.svg
    ├── r
    │   ├── actions-plugin-demo.json
    │   ├── actions-plugin.json
    │   ├── auto-embed-plugin-demo.json
    │   ├── auto-embed-plugin.json
    │   ├── auto-focus-plugin-demo.json
    │   ├── autocomplete-plugin-demo.json
    │   ├── autocomplete-plugin.json
    │   ├── block-format-toolbar-plugin-demo.json
    │   ├── block-format-toolbar-plugin.json
    │   ├── clear-editor-plugin-demo.json
    │   ├── clear-editor-plugin.json
    │   ├── clear-formatting-toolbar-plugin-demo.json
    │   ├── clear-formatting-toolbar-plugin.json
    │   ├── code-plugin-demo.json
    │   ├── code-plugin.json
    │   ├── collapsible-plugin-demo.json
    │   ├── collapsible-plugin.json
    │   ├── component-picker-menu-plugin-demo.json
    │   ├── component-picker-menu-plugin.json
    │   ├── context-menu-plugin-demo.json
    │   ├── context-menu-plugin.json
    │   ├── counter-character-plugin-demo.json
    │   ├── counter-character-plugin.json
    │   ├── drag-drop-paste-plugin-demo.json
    │   ├── drag-drop-paste-plugin.json
    │   ├── draggable-block-plugin-demo.json
    │   ├── draggable-block-plugin.json
    │   ├── edit-mode-toggle-plugin-demo.json
    │   ├── edit-mode-toggle-plugin.json
    │   ├── editor-x.json
    │   ├── editor.json
    │   ├── element-format-toolbar-plugin-demo.json
    │   ├── element-format-toolbar-plugin.json
    │   ├── emoji-plugin-demo.json
    │   ├── emoji-plugin.json
    │   ├── equation-plugin-demo.json
    │   ├── equation-plugin.json
    │   ├── excalidraw-plugin-demo.json
    │   ├── excalidraw-plugin.json
    │   ├── floating-text-format-plugin-demo.json
    │   ├── floating-text-format-plugin.json
    │   ├── font-color-toolbar-plugin-demo.json
    │   ├── font-color-toolbar-plugin.json
    │   ├── font-family-toolbar-plugin-demo.json
    │   ├── font-family-toolbar-plugin.json
    │   ├── font-format-toolbar-plugin-demo.json
    │   ├── font-format-toolbar-plugin.json
    │   ├── font-size-toolbar-plugin-demo.json
    │   ├── font-size-toolbar-plugin.json
    │   ├── hashtag-plugin-demo.json
    │   ├── history-toolbar-plugin-demo.json
    │   ├── history-toolbar-plugin.json
    │   ├── horizontal-rule-plugin-demo.json
    │   ├── horizontal-rule-plugin.json
    │   ├── image-plugin-demo.json
    │   ├── image-plugin.json
    │   ├── import-export-plugin-demo.json
    │   ├── import-export-plugin.json
    │   ├── index.json
    │   ├── inline-image-plugin-demo.json
    │   ├── inline-image-plugin.json
    │   ├── keywords-plugin-demo.json
    │   ├── keywords-plugin.json
    │   ├── layout-plugin-demo.json
    │   ├── layout-plugin.json
    │   ├── link-plugin-demo.json
    │   ├── link-plugin.json
    │   ├── link-toolbar-plugin-demo.json
    │   ├── link-toolbar-plugin.json
    │   ├── markdown-plugin-demo.json
    │   ├── markdown-plugin.json
    │   ├── markdown-toggle-plugin-demo.json
    │   ├── markdown-toggle-plugin.json
    │   ├── max-length-plugin-demo.json
    │   ├── max-length-plugin.json
    │   ├── mention-plugin-demo.json
    │   ├── mention-plugin.json
    │   ├── page-break-plugin-demo.json
    │   ├── page-break-plugin.json
    │   ├── poll-plugin-demo.json
    │   ├── poll-plugin.json
    │   ├── rich-text-editor-plugin-demo.json
    │   ├── rich-text-editor-plugin.json
    │   ├── share-content-plugin-demo.json
    │   ├── share-content-plugin.json
    │   ├── speech-to-text-plugin-demo.json
    │   ├── speech-to-text-plugin.json
    │   ├── styles
    │   │   └── new-york-v4
    │   │   │   ├── actions-plugin-demo.json
    │   │   │   ├── actions-plugin.json
    │   │   │   ├── auto-embed-plugin-demo.json
    │   │   │   ├── auto-embed-plugin.json
    │   │   │   ├── auto-focus-plugin-demo.json
    │   │   │   ├── autocomplete-plugin-demo.json
    │   │   │   ├── autocomplete-plugin.json
    │   │   │   ├── block-format-toolbar-plugin-demo.json
    │   │   │   ├── block-format-toolbar-plugin.json
    │   │   │   ├── clear-editor-plugin-demo.json
    │   │   │   ├── clear-editor-plugin.json
    │   │   │   ├── clear-formatting-toolbar-plugin-demo.json
    │   │   │   ├── clear-formatting-toolbar-plugin.json
    │   │   │   ├── code-plugin-demo.json
    │   │   │   ├── code-plugin.json
    │   │   │   ├── collapsible-plugin-demo.json
    │   │   │   ├── collapsible-plugin.json
    │   │   │   ├── component-picker-menu-plugin-demo.json
    │   │   │   ├── component-picker-menu-plugin.json
    │   │   │   ├── context-menu-plugin-demo.json
    │   │   │   ├── context-menu-plugin.json
    │   │   │   ├── counter-character-plugin-demo.json
    │   │   │   ├── counter-character-plugin.json
    │   │   │   ├── drag-drop-paste-plugin-demo.json
    │   │   │   ├── drag-drop-paste-plugin.json
    │   │   │   ├── draggable-block-plugin-demo.json
    │   │   │   ├── draggable-block-plugin.json
    │   │   │   ├── edit-mode-toggle-plugin-demo.json
    │   │   │   ├── edit-mode-toggle-plugin.json
    │   │   │   ├── editor-x.json
    │   │   │   ├── editor.json
    │   │   │   ├── element-format-toolbar-plugin-demo.json
    │   │   │   ├── element-format-toolbar-plugin.json
    │   │   │   ├── emoji-plugin-demo.json
    │   │   │   ├── emoji-plugin.json
    │   │   │   ├── equation-plugin-demo.json
    │   │   │   ├── equation-plugin.json
    │   │   │   ├── excalidraw-plugin-demo.json
    │   │   │   ├── excalidraw-plugin.json
    │   │   │   ├── floating-text-format-plugin-demo.json
    │   │   │   ├── floating-text-format-plugin.json
    │   │   │   ├── font-color-toolbar-plugin-demo.json
    │   │   │   ├── font-color-toolbar-plugin.json
    │   │   │   ├── font-family-toolbar-plugin-demo.json
    │   │   │   ├── font-family-toolbar-plugin.json
    │   │   │   ├── font-format-toolbar-plugin-demo.json
    │   │   │   ├── font-format-toolbar-plugin.json
    │   │   │   ├── font-size-toolbar-plugin-demo.json
    │   │   │   ├── font-size-toolbar-plugin.json
    │   │   │   ├── hashtag-plugin-demo.json
    │   │   │   ├── history-toolbar-plugin-demo.json
    │   │   │   ├── history-toolbar-plugin.json
    │   │   │   ├── horizontal-rule-plugin-demo.json
    │   │   │   ├── horizontal-rule-plugin.json
    │   │   │   ├── image-plugin-demo.json
    │   │   │   ├── image-plugin.json
    │   │   │   ├── import-export-plugin-demo.json
    │   │   │   ├── import-export-plugin.json
    │   │   │   ├── index.json
    │   │   │   ├── inline-image-plugin-demo.json
    │   │   │   ├── inline-image-plugin.json
    │   │   │   ├── keywords-plugin-demo.json
    │   │   │   ├── keywords-plugin.json
    │   │   │   ├── layout-plugin-demo.json
    │   │   │   ├── layout-plugin.json
    │   │   │   ├── link-plugin-demo.json
    │   │   │   ├── link-plugin.json
    │   │   │   ├── link-toolbar-plugin-demo.json
    │   │   │   ├── link-toolbar-plugin.json
    │   │   │   ├── markdown-plugin-demo.json
    │   │   │   ├── markdown-plugin.json
    │   │   │   ├── markdown-toggle-plugin-demo.json
    │   │   │   ├── markdown-toggle-plugin.json
    │   │   │   ├── max-length-plugin-demo.json
    │   │   │   ├── max-length-plugin.json
    │   │   │   ├── mention-plugin-demo.json
    │   │   │   ├── mention-plugin.json
    │   │   │   ├── page-break-plugin-demo.json
    │   │   │   ├── page-break-plugin.json
    │   │   │   ├── poll-plugin-demo.json
    │   │   │   ├── poll-plugin.json
    │   │   │   ├── registry.json
    │   │   │   ├── rich-text-editor-plugin-demo.json
    │   │   │   ├── rich-text-editor-plugin.json
    │   │   │   ├── share-content-plugin-demo.json
    │   │   │   ├── share-content-plugin.json
    │   │   │   ├── speech-to-text-plugin-demo.json
    │   │   │   ├── speech-to-text-plugin.json
    │   │   │   ├── subsuper-toolbar-plugin-demo.json
    │   │   │   ├── subsuper-toolbar-plugin.json
    │   │   │   ├── tab-focus-plugin-demo.json
    │   │   │   ├── tab-focus-plugin.json
    │   │   │   ├── table-plugin-demo.json
    │   │   │   ├── table-plugin.json
    │   │   │   ├── toolbar-plugin-demo.json
    │   │   │   ├── toolbar-plugin.json
    │   │   │   ├── tree-view-plugin-demo.json
    │   │   │   ├── tree-view-plugin.json
    │   │   │   ├── typing-pref-plugin-demo.json
    │   │   │   └── typing-pref-plugin.json
    │   ├── subsuper-toolbar-plugin-demo.json
    │   ├── subsuper-toolbar-plugin.json
    │   ├── tab-focus-plugin-demo.json
    │   ├── tab-focus-plugin.json
    │   ├── table-plugin-demo.json
    │   ├── table-plugin.json
    │   ├── toolbar-plugin-demo.json
    │   ├── toolbar-plugin.json
    │   ├── tree-view-plugin-demo.json
    │   ├── tree-view-plugin.json
    │   ├── typing-pref-plugin-demo.json
    │   └── typing-pref-plugin.json
    ├── schema.json
    ├── schema
    │   ├── registry-item.json
    │   └── registry.json
    ├── site.webmanifest
    ├── twitter-image.png
    ├── vercel.svg
    └── window.svg
├── registry.json
├── registry
    ├── __blocks__.json
    ├── __index__.tsx
    ├── index.ts
    ├── new-york-v4
    │   ├── blocks
    │   │   ├── editor-00
    │   │   │   ├── editor.tsx
    │   │   │   ├── nodes.ts
    │   │   │   ├── page.tsx
    │   │   │   └── plugins.tsx
    │   │   └── editor-x
    │   │   │   ├── editor.tsx
    │   │   │   ├── nodes.ts
    │   │   │   ├── page.tsx
    │   │   │   └── plugins.tsx
    │   ├── editor
    │   │   ├── context
    │   │   │   ├── floating-link-context.tsx
    │   │   │   ├── shared-autocomplete-context.tsx
    │   │   │   └── toolbar-context.tsx
    │   │   ├── editor-hooks
    │   │   │   ├── use-debounce.ts
    │   │   │   ├── use-modal.tsx
    │   │   │   ├── use-report.ts
    │   │   │   └── use-update-toolbar.ts
    │   │   ├── editor-ui
    │   │   │   ├── code-button.tsx
    │   │   │   ├── colorpicker.tsx
    │   │   │   ├── content-editable.tsx
    │   │   │   ├── equation-component.tsx
    │   │   │   ├── equation-editor.tsx
    │   │   │   ├── excalidraw-component.tsx
    │   │   │   ├── excalidraw-image.tsx
    │   │   │   ├── excalidraw-modal.tsx
    │   │   │   ├── image-component.tsx
    │   │   │   ├── image-resizer.tsx
    │   │   │   ├── inline-image-component.tsx
    │   │   │   ├── katex-equation-alterer.tsx
    │   │   │   ├── katex-renderer.tsx
    │   │   │   ├── poll-component.tsx
    │   │   │   └── poll.css
    │   │   ├── index.tsx
    │   │   ├── nodes
    │   │   │   ├── autocomplete-node.tsx
    │   │   │   ├── collapsible-container-node.ts
    │   │   │   ├── collapsible-content-node.ts
    │   │   │   ├── collapsible-title-node.ts
    │   │   │   ├── embeds
    │   │   │   │   ├── figma-node.tsx
    │   │   │   │   ├── tweet-node.tsx
    │   │   │   │   └── youtube-node.tsx
    │   │   │   ├── emoji-node.tsx
    │   │   │   ├── equation-node.tsx
    │   │   │   ├── excalidraw-node.tsx
    │   │   │   ├── image-node.tsx
    │   │   │   ├── inline-image-node.tsx
    │   │   │   ├── keyword-node.tsx
    │   │   │   ├── layout-container-node.tsx
    │   │   │   ├── layout-item-node.tsx
    │   │   │   ├── mention-node.ts
    │   │   │   ├── nodes.ts
    │   │   │   ├── page-break-node.css
    │   │   │   ├── page-break-node.tsx
    │   │   │   └── poll-node.tsx
    │   │   ├── plugins
    │   │   │   ├── actions
    │   │   │   │   ├── actions-plugin.tsx
    │   │   │   │   ├── character-limit-plugin.tsx
    │   │   │   │   ├── clear-editor-plugin.tsx
    │   │   │   │   ├── counter-character-plugin.tsx
    │   │   │   │   ├── edit-mode-toggle-plugin.tsx
    │   │   │   │   ├── import-export-plugin.tsx
    │   │   │   │   ├── markdown-toggle-plugin.tsx
    │   │   │   │   ├── max-length-plugin.tsx
    │   │   │   │   ├── share-content-plugin.tsx
    │   │   │   │   ├── speech-to-text-plugin.tsx
    │   │   │   │   └── tree-view-plugin.tsx
    │   │   │   ├── auto-link-plugin.tsx
    │   │   │   ├── autocomplete-plugin.tsx
    │   │   │   ├── code-action-menu-plugin.tsx
    │   │   │   ├── code-highlight-plugin.tsx
    │   │   │   ├── collapsible-plugin.tsx
    │   │   │   ├── component-picker-menu-plugin.tsx
    │   │   │   ├── context-menu-plugin.tsx
    │   │   │   ├── default
    │   │   │   │   ├── lexical-context-menu-plugin.tsx
    │   │   │   │   └── lexical-typeahead-menu-plugin.ts
    │   │   │   ├── drag-drop-paste-plugin.tsx
    │   │   │   ├── draggable-block-plugin.tsx
    │   │   │   ├── embeds
    │   │   │   │   ├── auto-embed-plugin.tsx
    │   │   │   │   ├── figma-plugin.tsx
    │   │   │   │   ├── twitter-plugin.tsx
    │   │   │   │   └── youtube-plugin.tsx
    │   │   │   ├── emoji-picker-plugin.tsx
    │   │   │   ├── emojis-plugin.tsx
    │   │   │   ├── equations-plugin.tsx
    │   │   │   ├── excalidraw-plugin.tsx
    │   │   │   ├── floating-link-editor-plugin.tsx
    │   │   │   ├── floating-text-format-plugin.tsx
    │   │   │   ├── images-plugin.tsx
    │   │   │   ├── inline-image-plugin.tsx
    │   │   │   ├── keywords-plugin.tsx
    │   │   │   ├── layout-plugin.tsx
    │   │   │   ├── link-plugin.tsx
    │   │   │   ├── list-max-indent-level-plugin.tsx
    │   │   │   ├── mentions-plugin.tsx
    │   │   │   ├── page-break-plugin.tsx
    │   │   │   ├── picker
    │   │   │   │   ├── alignment-picker-plugin.tsx
    │   │   │   │   ├── bulleted-list-picker-plugin.tsx
    │   │   │   │   ├── check-list-picker-plugin.tsx
    │   │   │   │   ├── code-picker-plugin.tsx
    │   │   │   │   ├── collapsible-picker-plugin.tsx
    │   │   │   │   ├── columns-layout-picker-plugin.tsx
    │   │   │   │   ├── component-picker-option.tsx
    │   │   │   │   ├── divider-picker-plugin.tsx
    │   │   │   │   ├── embeds-picker-plugin.tsx
    │   │   │   │   ├── equation-picker-plugin.tsx
    │   │   │   │   ├── excalidraw-picker-plugin.tsx
    │   │   │   │   ├── heading-picker-plugin.tsx
    │   │   │   │   ├── image-picker-plugin.tsx
    │   │   │   │   ├── numbered-list-picker-plugin.tsx
    │   │   │   │   ├── page-break-picker-plugin.tsx
    │   │   │   │   ├── paragraph-picker-plugin.tsx
    │   │   │   │   ├── poll-picker-plugin.tsx
    │   │   │   │   ├── quote-picker-plugin.tsx
    │   │   │   │   └── table-picker-plugin.tsx
    │   │   │   ├── plugins.tsx
    │   │   │   ├── poll-plugin.tsx
    │   │   │   ├── tab-focus-plugin.tsx
    │   │   │   ├── table-action-menu-plugin.tsx
    │   │   │   ├── table-cell-resizer-plugin.tsx
    │   │   │   ├── table-hover-actions-plugin.tsx
    │   │   │   ├── table-plugin.tsx
    │   │   │   ├── toolbar
    │   │   │   │   ├── block-format-toolbar-plugin.tsx
    │   │   │   │   ├── block-format
    │   │   │   │   │   ├── block-format-data.tsx
    │   │   │   │   │   ├── format-bulleted-list.tsx
    │   │   │   │   │   ├── format-check-list.tsx
    │   │   │   │   │   ├── format-code-block.tsx
    │   │   │   │   │   ├── format-heading.tsx
    │   │   │   │   │   ├── format-numbered-list.tsx
    │   │   │   │   │   ├── format-paragraph.tsx
    │   │   │   │   │   └── format-quote.tsx
    │   │   │   │   ├── block-insert-plugin.tsx
    │   │   │   │   ├── block-insert
    │   │   │   │   │   ├── insert-collapsible-container.tsx
    │   │   │   │   │   ├── insert-columns-layout.tsx
    │   │   │   │   │   ├── insert-embeds.tsx
    │   │   │   │   │   ├── insert-equation.tsx
    │   │   │   │   │   ├── insert-excalidraw.tsx
    │   │   │   │   │   ├── insert-horizontal-rule.tsx
    │   │   │   │   │   ├── insert-image.tsx
    │   │   │   │   │   ├── insert-inline-image.tsx
    │   │   │   │   │   ├── insert-page-break.tsx
    │   │   │   │   │   ├── insert-poll.tsx
    │   │   │   │   │   └── insert-table.tsx
    │   │   │   │   ├── clear-formatting-toolbar-plugin.tsx
    │   │   │   │   ├── code-language-toolbar-plugin.tsx
    │   │   │   │   ├── element-format-toolbar-plugin.tsx
    │   │   │   │   ├── font-background-toolbar-plugin.tsx
    │   │   │   │   ├── font-color-toolbar-plugin.tsx
    │   │   │   │   ├── font-family-toolbar-plugin.tsx
    │   │   │   │   ├── font-format-toolbar-plugin.tsx
    │   │   │   │   ├── font-size-toolbar-plugin.tsx
    │   │   │   │   ├── history-toolbar-plugin.tsx
    │   │   │   │   ├── link-toolbar-plugin.tsx
    │   │   │   │   ├── subsuper-toolbar-plugin.tsx
    │   │   │   │   └── toolbar-plugin.tsx
    │   │   │   └── typing-pref-plugin.tsx
    │   │   ├── shared
    │   │   │   ├── can-use-dom.ts
    │   │   │   ├── caret-from-point.ts
    │   │   │   ├── environment.ts
    │   │   │   ├── invariant.ts
    │   │   │   ├── normalize-class-names.ts
    │   │   │   ├── react-patches.ts
    │   │   │   ├── react-test-utils.ts
    │   │   │   ├── simple-diff-with-cursor.ts
    │   │   │   ├── use-layout-effect.ts
    │   │   │   └── warn-only-once.ts
    │   │   ├── themes
    │   │   │   ├── editor-theme.css
    │   │   │   └── editor-theme.ts
    │   │   ├── transformers
    │   │   │   ├── markdown-emoji-transformer.ts
    │   │   │   ├── markdown-equation-transformer.ts
    │   │   │   ├── markdown-hr-transformer.ts
    │   │   │   ├── markdown-image-transformer.ts
    │   │   │   ├── markdown-table-transformer.ts
    │   │   │   └── markdown-tweet-transformer.ts
    │   │   └── utils
    │   │   │   ├── collapsible.ts
    │   │   │   ├── doc-serialization.ts
    │   │   │   ├── emoji-list.ts
    │   │   │   ├── get-dom-range-rect.ts
    │   │   │   ├── get-selected-node.ts
    │   │   │   ├── guard.ts
    │   │   │   ├── is-mobile-width.ts
    │   │   │   ├── set-floating-elem-position-for-link-editor.ts
    │   │   │   ├── set-floating-elem-position.ts
    │   │   │   ├── swipe.ts
    │   │   │   └── url.ts
    │   ├── examples
    │   │   ├── actions-plugin-demo.tsx
    │   │   ├── auto-embed-plugin-demo.tsx
    │   │   ├── auto-focus-plugin-demo.tsx
    │   │   ├── autocomplete-plugin-demo.tsx
    │   │   ├── block-format-toolbar-demo.tsx
    │   │   ├── block-format-toolbar-plugin-demo.tsx
    │   │   ├── clear-editor-plugin-demo.tsx
    │   │   ├── clear-formatting-toolbar-plugin-demo.tsx
    │   │   ├── code-plugin-demo.tsx
    │   │   ├── collapsible-plugin-demo.tsx
    │   │   ├── component-picker-menu-plugin-demo.tsx
    │   │   ├── context-menu-plugin-demo.tsx
    │   │   ├── counter-character-plugin-demo.tsx
    │   │   ├── drag-drop-paste-plugin-demo.tsx
    │   │   ├── draggable-block-plugin-demo.tsx
    │   │   ├── edit-mode-toggle-plugin-demo.tsx
    │   │   ├── element-format-toolbar-plugin-demo.tsx
    │   │   ├── emoji-plugin-demo.tsx
    │   │   ├── equation-plugin-demo.tsx
    │   │   ├── excalidraw-plugin-demo.tsx
    │   │   ├── floating-text-format-plugin-demo.tsx
    │   │   ├── font-color-toolbar-plugin-demo.tsx
    │   │   ├── font-family-toolbar-plugin-demo.tsx
    │   │   ├── font-format-toolbar-plugin-demo.tsx
    │   │   ├── font-size-toolbar-plugin-demo.tsx
    │   │   ├── hashtag-plugin-demo.tsx
    │   │   ├── history-toolbar-demo.tsx
    │   │   ├── history-toolbar-plugin-demo.tsx
    │   │   ├── horizontal-rule-plugin-demo.tsx
    │   │   ├── image-plugin-demo.tsx
    │   │   ├── import-export-plugin-demo.tsx
    │   │   ├── inline-image-plugin-demo.tsx
    │   │   ├── keywords-plugin-demo.tsx
    │   │   ├── layout-plugin-demo.tsx
    │   │   ├── link-plugin-demo.tsx
    │   │   ├── link-toolbar-plugin-demo.tsx
    │   │   ├── markdown-plugin-demo.tsx
    │   │   ├── markdown-toggle-plugin-demo.tsx
    │   │   ├── max-length-plugin-demo.tsx
    │   │   ├── mention-plugin-demo.tsx
    │   │   ├── page-break-plugin-demo.tsx
    │   │   ├── poll-plugin-demo.tsx
    │   │   ├── rich-text-editor-demo.tsx
    │   │   ├── rich-text-editor-plugin-demo.tsx
    │   │   ├── share-content-plugin-demo.tsx
    │   │   ├── speech-to-text-plugin-demo.tsx
    │   │   ├── subsuper-toolbar-plugin-demo.tsx
    │   │   ├── tab-focus-plugin-demo.tsx
    │   │   ├── table-plugin-demo.tsx
    │   │   ├── toolbar-demo.tsx
    │   │   ├── toolbar-plugin-demo.tsx
    │   │   ├── tree-view-plugin-demo.tsx
    │   │   └── typing-pref-plugin-demo.tsx
    │   ├── hooks
    │   │   └── use-mobile.ts
    │   ├── lib
    │   │   └── utils.ts
    │   └── ui
    │   │   ├── accordion.tsx
    │   │   ├── alert-dialog.tsx
    │   │   ├── alert.tsx
    │   │   ├── aspect-ratio.tsx
    │   │   ├── avatar.tsx
    │   │   ├── badge.tsx
    │   │   ├── breadcrumb.tsx
    │   │   ├── button.tsx
    │   │   ├── calendar.tsx
    │   │   ├── card.tsx
    │   │   ├── carousel.tsx
    │   │   ├── chart.tsx
    │   │   ├── checkbox.tsx
    │   │   ├── collapsible.tsx
    │   │   ├── command.tsx
    │   │   ├── context-menu.tsx
    │   │   ├── dialog.tsx
    │   │   ├── drawer.tsx
    │   │   ├── dropdown-menu.tsx
    │   │   ├── form.tsx
    │   │   ├── hover-card.tsx
    │   │   ├── input-otp.tsx
    │   │   ├── input.tsx
    │   │   ├── label.tsx
    │   │   ├── menubar.tsx
    │   │   ├── navigation-menu.tsx
    │   │   ├── pagination.tsx
    │   │   ├── popover.tsx
    │   │   ├── progress.tsx
    │   │   ├── radio-group.tsx
    │   │   ├── resizable.tsx
    │   │   ├── scroll-area.tsx
    │   │   ├── select.tsx
    │   │   ├── separator.tsx
    │   │   ├── sheet.tsx
    │   │   ├── sidebar.tsx
    │   │   ├── skeleton.tsx
    │   │   ├── slider.tsx
    │   │   ├── sonner.tsx
    │   │   ├── switch.tsx
    │   │   ├── table.tsx
    │   │   ├── tabs.tsx
    │   │   ├── textarea.tsx
    │   │   ├── toggle-group.tsx
    │   │   ├── toggle.tsx
    │   │   └── tooltip.tsx
    ├── registry-base-colors.ts
    ├── registry-blocks.ts
    ├── registry-categories.ts
    ├── registry-charts.ts
    ├── registry-colors.ts
    ├── registry-examples.ts
    ├── registry-hooks.ts
    ├── registry-icons.ts
    ├── registry-internal.ts
    ├── registry-lib.ts
    ├── registry-themes.ts
    ├── registry-ui.ts
    └── schema.ts
├── scripts
    ├── build-registry.mts
    └── capture-registry.mts
├── source.config.ts
├── styles
    ├── globals.css
    └── themes.css
├── tsconfig.json
└── tsconfig.scripts.json


/.gitignore:
--------------------------------------------------------------------------------
 1 | # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 2 | 
 3 | # dependencies
 4 | /node_modules
 5 | /.pnp
 6 | .pnp.*
 7 | .yarn/*
 8 | !.yarn/patches
 9 | !.yarn/plugins
10 | !.yarn/releases
11 | !.yarn/versions
12 | 
13 | # testing
14 | /coverage
15 | 
16 | # next.js
17 | /.next/
18 | /out/
19 | 
20 | # production
21 | /build
22 | 
23 | # misc
24 | .DS_Store
25 | *.pem
26 | 
27 | # debug
28 | npm-debug.log*
29 | yarn-debug.log*
30 | yarn-error.log*
31 | .pnpm-debug.log*
32 | 
33 | # env files (can opt-in for committing if needed)
34 | .env*
35 | 
36 | # vercel
37 | .vercel
38 | 
39 | # typescript
40 | *.tsbuildinfo
41 | next-env.d.ts
42 | 
43 | 
44 | # generated content
45 | .contentlayer
46 | .content-collections
47 | .source
48 | 


--------------------------------------------------------------------------------
/.prettierignore:
--------------------------------------------------------------------------------
1 | dist
2 | node_modules
3 | .next
4 | build
5 | .contentlayer
6 | registry/__index__.tsx
7 | 


--------------------------------------------------------------------------------
/app/(app)/(root)/section.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { useState } from "react"
 4 | import { SerializedEditorState } from "lexical"
 5 | 
 6 | import { Editor } from "@/components/blocks/editor/editor"
 7 | 
 8 | export const initialValue = {
 9 |   root: {
10 |     children: [
11 |       {
12 |         children: [
13 |           {
14 |             detail: 0,
15 |             format: 0,
16 |             mode: "normal",
17 |             style: "",
18 |             text: "Hello World 🚀",
19 |             type: "text",
20 |             version: 1,
21 |           },
22 |         ],
23 |         direction: "ltr",
24 |         format: "",
25 |         indent: 0,
26 |         type: "paragraph",
27 |         version: 1,
28 |       },
29 |     ],
30 |     direction: "ltr",
31 |     format: "",
32 |     indent: 0,
33 |     type: "root",
34 |     version: 1,
35 |   },
36 | } as unknown as SerializedEditorState
37 | 
38 | export function EditorSection() {
39 |   const [editorState, setEditorState] =
40 |     useState<SerializedEditorState>(initialValue)
41 | 
42 |   return (
43 |     <Editor
44 |       editorSerializedState={editorState}
45 |       onSerializedChange={(value) => setEditorState(value)}
46 |     />
47 |   )
48 | }
49 | 


--------------------------------------------------------------------------------
/app/(app)/blocks/[...categories]/page.tsx:
--------------------------------------------------------------------------------
 1 | import { getAllBlockIds } from "@/lib/blocks"
 2 | import { BlockDisplay } from "@/components/block-display"
 3 | import { registryCategories } from "@/registry/registry-categories"
 4 | 
 5 | export const revalidate = false
 6 | export const dynamic = "force-static"
 7 | export const dynamicParams = false
 8 | 
 9 | export async function generateStaticParams() {
10 |   return registryCategories.map((category) => ({
11 |     categories: [category.slug],
12 |   }))
13 | }
14 | 
15 | export default async function BlocksPage({
16 |   params,
17 | }: {
18 |   params: Promise<{ categories?: string[] }>
19 | }) {
20 |   const { categories = [] } = await params
21 |   const blocks = await getAllBlockIds(["registry:block"], categories)
22 | 
23 |   return (
24 |     <div className="flex flex-col gap-12 md:gap-24">
25 |       {blocks.map((name) => (
26 |         <BlockDisplay name={name} key={name} />
27 |       ))}
28 |     </div>
29 |   )
30 | }
31 | 


--------------------------------------------------------------------------------
/app/(app)/blocks/page.tsx:
--------------------------------------------------------------------------------
 1 | import { BlockDisplay } from "@/components/block-display"
 2 | 
 3 | export const dynamic = "force-static"
 4 | export const revalidate = false
 5 | 
 6 | const FEATURED_BLOCKS = ["editor-x"]
 7 | 
 8 | export default async function BlocksPage() {
 9 |   return (
10 |     <div className="flex flex-col gap-12 md:gap-24">
11 |       {FEATURED_BLOCKS.map((name) => (
12 |         <BlockDisplay name={name} key={name} />
13 |       ))}
14 |     </div>
15 |   )
16 | }
17 | 


--------------------------------------------------------------------------------
/app/(app)/docs/layout.tsx:
--------------------------------------------------------------------------------
 1 | import { docsConfig } from "@/lib/docs"
 2 | import { DocsSidebar } from "@/components/docs-sidebar"
 3 | import { SidebarProvider } from "@/registry/new-york-v4/ui/sidebar"
 4 | 
 5 | export default function DocsLayout({
 6 |   children,
 7 | }: {
 8 |   children: React.ReactNode
 9 | }) {
10 |   return (
11 |     <div className="container-wrapper flex flex-1 flex-col">
12 |       <SidebarProvider className="min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
13 |         <DocsSidebar tree={docsConfig.sidebarNav} />
14 |         <div className="h-full w-full">{children}</div>
15 |       </SidebarProvider>
16 |     </div>
17 |   )
18 | }
19 | 


--------------------------------------------------------------------------------
/app/(app)/layout.tsx:
--------------------------------------------------------------------------------
 1 | import { SiteFooter } from "@/components/site-footer"
 2 | import { SiteHeader } from "@/components/site-header"
 3 | 
 4 | export default function AppLayout({ children }: { children: React.ReactNode }) {
 5 |   return (
 6 |     <div className="bg-background relative flex min-h-svh flex-col">
 7 |       <SiteHeader />
 8 |       <main className="flex flex-1 flex-col">{children}</main>
 9 |       <SiteFooter />
10 |     </div>
11 |   )
12 | }
13 | 


--------------------------------------------------------------------------------
/components.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://ui.shadcn.com/schema.json",
 3 |   "style": "new-york",
 4 |   "rsc": true,
 5 |   "tsx": true,
 6 |   "tailwind": {
 7 |     "config": "",
 8 |     "css": "app/globals.css",
 9 |     "baseColor": "neutral",
10 |     "cssVariables": true,
11 |     "prefix": ""
12 |   },
13 |   "aliases": {
14 |     "components": "@/components",
15 |     "utils": "@/lib/utils",
16 |     "ui": "@/registry/new-york-v4/ui",
17 |     "lib": "@/lib",
18 |     "hooks": "@/hooks"
19 |   },
20 |   "iconLibrary": "lucide"
21 | }


--------------------------------------------------------------------------------
/components/analytics.tsx:
--------------------------------------------------------------------------------
1 | "use client"
2 | 
3 | import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
4 | 
5 | export function Analytics() {
6 |   return <VercelAnalytics />
7 | }
8 | 


--------------------------------------------------------------------------------
/components/announcement.tsx:
--------------------------------------------------------------------------------
1 | export function Announcement() {
2 |   return null
3 | }
4 | 


--------------------------------------------------------------------------------
/components/block-display.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | import { z } from "zod"
 3 | 
 4 | import { highlightCode } from "@/lib/highlight-code"
 5 | import {
 6 |   createFileTreeForRegistryItemFiles,
 7 |   getRegistryItem,
 8 | } from "@/lib/registry"
 9 | import { BlockViewer } from "@/components/block-viewer"
10 | import { registryItemFileSchema } from "@/registry/schema"
11 | 
12 | export async function BlockDisplay({ name }: { name: string }) {
13 |   const item = await getCachedRegistryItem(name)
14 | 
15 |   if (!item?.files) {
16 |     return null
17 |   }
18 | 
19 |   const [tree, highlightedFiles] = await Promise.all([
20 |     getCachedFileTree(item.files),
21 |     getCachedHighlightedFiles(item.files),
22 |   ])
23 | 
24 |   return (
25 |     <BlockViewer item={item} tree={tree} highlightedFiles={highlightedFiles} />
26 |   )
27 | }
28 | 
29 | const getCachedRegistryItem = React.cache(async (name: string) => {
30 |   return await getRegistryItem(name)
31 | })
32 | 
33 | const getCachedFileTree = React.cache(
34 |   async (files: Array<{ path: string; target?: string }>) => {
35 |     if (!files) {
36 |       return null
37 |     }
38 | 
39 |     return await createFileTreeForRegistryItemFiles(files)
40 |   }
41 | )
42 | 
43 | const getCachedHighlightedFiles = React.cache(
44 |   async (files: z.infer<typeof registryItemFileSchema>[]) => {
45 |     return await Promise.all(
46 |       files.map(async (file) => ({
47 |         ...file,
48 |         highlightedContent: await highlightCode(file.content ?? ""),
49 |       }))
50 |     )
51 |   }
52 | )
53 | 


--------------------------------------------------------------------------------
/components/block-image.tsx:
--------------------------------------------------------------------------------
 1 | import Image from "next/image"
 2 | 
 3 | import { cn } from "@/lib/utils"
 4 | 
 5 | export function BlockImage({
 6 |   name,
 7 |   width = 1440,
 8 |   height = 900,
 9 |   className,
10 | }: Omit<React.ComponentProps<typeof Image>, "src" | "alt"> & { name: string }) {
11 |   return (
12 |     <div
13 |       className={cn(
14 |         "relative aspect-[1440/900] w-full overflow-hidden rounded-lg",
15 |         className
16 |       )}
17 |     >
18 |       <Image
19 |         src={`/r/styles/new-york/${name}-light.png`}
20 |         alt={name}
21 |         width={width}
22 |         height={height}
23 |         className="object-cover dark:hidden"
24 |         data-image="light"
25 |       />
26 |       <Image
27 |         src={`/r/styles/new-york/${name}-dark.png`}
28 |         alt={name}
29 |         width={width}
30 |         height={height}
31 |         className="hidden object-cover dark:block"
32 |         data-image="dark"
33 |       />
34 |     </div>
35 |   )
36 | }
37 | 


--------------------------------------------------------------------------------
/components/callout.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils"
 2 | import {
 3 |   Alert,
 4 |   AlertDescription,
 5 |   AlertTitle,
 6 | } from "@/registry/new-york-v4/ui/alert"
 7 | 
 8 | export function Callout({
 9 |   title,
10 |   children,
11 |   icon,
12 |   className,
13 |   ...props
14 | }: React.ComponentProps<typeof Alert> & { icon?: React.ReactNode }) {
15 |   return (
16 |     <Alert
17 |       className={cn(
18 |         "bg-surface text-surface-foreground mt-6 w-auto border-none md:-mx-4",
19 |         className
20 |       )}
21 |       {...props}
22 |     >
23 |       {icon}
24 |       {title && <AlertTitle>{title}</AlertTitle>}
25 |       <AlertDescription className="text-card-foreground/80">
26 |         {children}
27 |       </AlertDescription>
28 |     </Alert>
29 |   )
30 | }
31 | 


--------------------------------------------------------------------------------
/components/cards/calendar.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { addDays } from "date-fns"
 4 | 
 5 | import { Calendar } from "@/registry/new-york-v4/ui/calendar"
 6 | import { Card, CardContent } from "@/registry/new-york-v4/ui/card"
 7 | 
 8 | const start = new Date(2025, 5, 5)
 9 | 
10 | export function CardsCalendar() {
11 |   return (
12 |     <Card className="hidden max-w-[260px] p-0 sm:flex">
13 |       <CardContent className="p-0">
14 |         <Calendar
15 |           numberOfMonths={1}
16 |           mode="range"
17 |           defaultMonth={start}
18 |           selected={{
19 |             from: start,
20 |             to: addDays(start, 8),
21 |           }}
22 |         />
23 |       </CardContent>
24 |     </Card>
25 |   )
26 | }
27 | 


--------------------------------------------------------------------------------
/components/code-tabs.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | 
 5 | import { useConfig } from "@/hooks/use-config"
 6 | import { Tabs } from "@/registry/new-york-v4/ui/tabs"
 7 | 
 8 | export function CodeTabs({ children }: React.ComponentProps<typeof Tabs>) {
 9 |   const [config, setConfig] = useConfig()
10 | 
11 |   const installationType = React.useMemo(() => {
12 |     return config.installationType || "cli"
13 |   }, [config])
14 | 
15 |   return (
16 |     <Tabs
17 |       value={installationType}
18 |       onValueChange={(value) =>
19 |         setConfig({ ...config, installationType: value as "cli" | "manual" })
20 |       }
21 |       className="relative mt-6 w-full"
22 |     >
23 |       {children}
24 |     </Tabs>
25 |   )
26 | }
27 | 


--------------------------------------------------------------------------------
/components/color-palette.tsx:
--------------------------------------------------------------------------------
 1 | import { type ColorPalette } from "@/lib/colors"
 2 | import { Color } from "@/components/color"
 3 | import { ColorFormatSelector } from "@/components/color-format-selector"
 4 | 
 5 | export function ColorPalette({ colorPalette }: { colorPalette: ColorPalette }) {
 6 |   return (
 7 |     <div id={colorPalette.name} className="scroll-mt-20 rounded-lg">
 8 |       <div className="flex items-center px-4">
 9 |         <div className="flex-1 pl-1 text-sm font-medium">
10 |           <h2 className="capitalize">{colorPalette.name}</h2>
11 |         </div>
12 |         <ColorFormatSelector
13 |           color={colorPalette.colors[0]}
14 |           className="ml-auto"
15 |         />
16 |       </div>
17 |       <div className="flex flex-col gap-4 py-4 sm:flex-row sm:gap-2">
18 |         {colorPalette.colors.map((color) => (
19 |           <Color key={color.hex} color={color} />
20 |         ))}
21 |       </div>
22 |     </div>
23 |   )
24 | }
25 | 


--------------------------------------------------------------------------------
/components/colors-nav.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import Link from "next/link"
 4 | import { usePathname } from "next/navigation"
 5 | 
 6 | import { getColors } from "@/lib/colors"
 7 | import { cn } from "@/lib/utils"
 8 | import { ScrollArea, ScrollBar } from "@/registry/new-york-v4/ui/scroll-area"
 9 | 
10 | export function ColorsNav({
11 |   className,
12 |   ...props
13 | }: React.ComponentProps<"div">) {
14 |   const pathname = usePathname()
15 |   const colors = getColors()
16 | 
17 |   return (
18 |     <div className={cn("flex items-center", className)} {...props}>
19 |       <ScrollArea className="max-w-full">
20 |         <div className="flex items-center">
21 |           {colors.map((colorPalette, index) => (
22 |             <Link
23 |               href={`/colors#${colorPalette.name}`}
24 |               key={colorPalette.name}
25 |               data-active={
26 |                 pathname?.startsWith(colorPalette.name) ||
27 |                 (index === 0 && pathname === "/colors")
28 |               }
29 |               className={cn(
30 |                 "text-muted-foreground hover:text-primary data-[active=true]:text-primary flex h-7 items-center justify-center px-4 text-center text-base font-medium capitalize transition-colors"
31 |               )}
32 |             >
33 |               {colorPalette.name}
34 |             </Link>
35 |           ))}
36 |         </div>
37 |         <ScrollBar orientation="horizontal" className="invisible" />
38 |       </ScrollArea>
39 |     </div>
40 |   )
41 | }
42 | 


--------------------------------------------------------------------------------
/components/components-list.tsx:
--------------------------------------------------------------------------------
 1 | import Link from "next/link"
 2 | 
 3 | import { source } from "@/lib/source"
 4 | 
 5 | export function ComponentsList() {
 6 |   const components = source.pageTree.children.find(
 7 |     (page) => page.$id === "components"
 8 |   )
 9 | 
10 |   if (components?.type !== "folder") {
11 |     return
12 |   }
13 | 
14 |   const list = components.children.filter(
15 |     (component) => component.type === "page"
16 |   )
17 | 
18 |   return (
19 |     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20">
20 |       {list.map((component) => (
21 |         <Link
22 |           key={component.$id}
23 |           href={component.url}
24 |           className="text-lg font-medium underline-offset-4 hover:underline md:text-base"
25 |         >
26 |           {component.name}
27 |         </Link>
28 |       ))}
29 |     </div>
30 |   )
31 | }
32 | 


--------------------------------------------------------------------------------
/components/docs-copy-page.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { IconCheck, IconCopy } from "@tabler/icons-react"
 4 | 
 5 | import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
 6 | import { Button } from "@/registry/new-york-v4/ui/button"
 7 | import {
 8 |   Tooltip,
 9 |   TooltipContent,
10 |   TooltipTrigger,
11 | } from "@/registry/new-york-v4/ui/tooltip"
12 | 
13 | export function DocsCopyPage({ page }: { page: string }) {
14 |   const { copyToClipboard, isCopied } = useCopyToClipboard()
15 | 
16 |   return (
17 |     <Tooltip>
18 |       <TooltipTrigger asChild>
19 |         <Button
20 |           variant="outline"
21 |           size="sm"
22 |           className="h-8 pl-1.5 md:h-7 [&>svg]:size-3.5"
23 |           onClick={() => copyToClipboard(page)}
24 |         >
25 |           {isCopied ? <IconCheck /> : <IconCopy />} Copy Page
26 |         </Button>
27 |       </TooltipTrigger>
28 |       <TooltipContent>
29 |         <p>Copy as Markdown</p>
30 |       </TooltipContent>
31 |     </Tooltip>
32 |   )
33 | }
34 | 


--------------------------------------------------------------------------------
/components/github-link.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | import Link from "next/link"
 3 | 
 4 | import { siteConfig } from "@/lib/config"
 5 | import { Icons } from "@/components/icons"
 6 | import { Button } from "@/registry/new-york-v4/ui/button"
 7 | import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"
 8 | 
 9 | export function GitHubLink() {
10 |   return (
11 |     <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
12 |       <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
13 |         <Icons.gitHub />
14 |         <React.Suspense fallback={<Skeleton className="h-4 w-8" />}>
15 |           <StarsCount />
16 |         </React.Suspense>
17 |       </Link>
18 |     </Button>
19 |   )
20 | }
21 | 
22 | export async function StarsCount() {
23 |   const data = await fetch(
24 |     "https://api.github.com/repos/htmujahid/shadcn-editor",
25 |     {
26 |       next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
27 |     }
28 |   )
29 |   const json = await data.json()
30 | 
31 |   return (
32 |     <span className="text-muted-foreground w-8 text-xs tabular-nums">
33 |       {json.stargazers_count >= 1000
34 |         ? `${(json.stargazers_count / 1000).toFixed(1)}k`
35 |         : json.stargazers_count.toLocaleString()}
36 |     </span>
37 |   )
38 | }
39 | 


--------------------------------------------------------------------------------
/components/lo-fi/accordion.tsx:
--------------------------------------------------------------------------------
 1 | import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
 2 | 
 3 | import { Atom } from "@/components/lo-fi/atom"
 4 | 
 5 | export function AccordionLoFi() {
 6 |   return (
 7 |     <div className="flex flex-col">
 8 |       <div className="flex flex-col gap-1 border-b py-2">
 9 |         <div className="flex items-center justify-between">
10 |           <Atom shade="300" className="h-2 w-1/3" />
11 |           <ChevronDownIcon className="size-3" />
12 |         </div>
13 |       </div>
14 |       <div className="flex flex-col gap-1 border-b py-2">
15 |         <div className="flex items-center justify-between">
16 |           <Atom shade="300" className="h-2 w-1/2" />
17 |           <ChevronUpIcon className="size-3" />
18 |         </div>
19 |         <div className="flex flex-col gap-1.5">
20 |           <Atom shade="200" className="h-2 w-2/3" />
21 |           <Atom shade="200" className="h-2 w-1/3" />
22 |         </div>
23 |       </div>
24 |       <div className="flex flex-col gap-1 py-2">
25 |         <div className="flex items-center justify-between">
26 |           <Atom shade="300" className="h-2 w-2/3" />
27 |           <ChevronDownIcon className="size-3" />
28 |         </div>
29 |       </div>
30 |     </div>
31 |   )
32 | }
33 | 


--------------------------------------------------------------------------------
/components/lo-fi/alert.tsx:
--------------------------------------------------------------------------------
 1 | import { CircleAlertIcon } from "lucide-react"
 2 | 
 3 | import { Atom } from "@/components/lo-fi/atom"
 4 | 
 5 | export function AlertLoFi() {
 6 |   return (
 7 |     <Atom
 8 |       shade="100"
 9 |       className="rounder-lg flex items-start justify-between gap-2 border p-2"
10 |     >
11 |       <CircleAlertIcon className="size-3" />
12 |       <div className="flex flex-1 flex-col gap-1">
13 |         <Atom shade="300" className="h-2 w-2/3" />
14 |         <Atom shade="200" className="h-2 w-full" />
15 |       </div>
16 |     </Atom>
17 |   )
18 | }
19 | 


--------------------------------------------------------------------------------
/components/lo-fi/atom.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | import { cva, type VariantProps } from "class-variance-authority"
 3 | 
 4 | import { cn } from "@/lib/utils"
 5 | 
 6 | const atomVariants = cva(
 7 |   "inline-flex rounded-lg border-neutral-300 dark:border-neutral-600",
 8 |   {
 9 |     variants: {
10 |       shade: {
11 |         "50": "bg-neutral-50 dark:bg-neutral-900",
12 |         "100": "bg-neutral-100 dark:bg-neutral-800",
13 |         "200": "bg-neutral-200 dark:bg-neutral-700",
14 |         "300": "bg-neutral-300 dark:bg-neutral-600",
15 |         "400": "bg-neutral-400 dark:bg-neutral-500",
16 |         "500": "bg-neutral-500 dark:bg-neutral-400",
17 |         "600": "bg-neutral-600 dark:bg-neutral-300",
18 |         "700": "bg-neutral-700 dark:bg-neutral-200",
19 |         "800": "bg-neutral-800 dark:bg-neutral-100",
20 |         "900": "bg-neutral-900 dark:bg-neutral-50",
21 |       },
22 |     },
23 |     defaultVariants: {
24 |       shade: "50",
25 |     },
26 |   }
27 | )
28 | 
29 | function Atom({
30 |   className,
31 |   shade,
32 |   ...props
33 | }: React.ComponentProps<"div"> & VariantProps<typeof atomVariants>) {
34 |   return (
35 |     <div
36 |       data-slot="button"
37 |       className={cn(atomVariants({ shade, className }))}
38 |       {...props}
39 |     />
40 |   )
41 | }
42 | 
43 | export { Atom }
44 | 


--------------------------------------------------------------------------------
/components/lo-fi/component.tsx:
--------------------------------------------------------------------------------
 1 | import Link from "next/link"
 2 | 
 3 | import { Atom } from "@/components/lo-fi/atom"
 4 | 
 5 | function Component({ href, ...props }: React.ComponentProps<typeof Link>) {
 6 |   return <Link href={href} className="group flex flex-col gap-2" {...props} />
 7 | }
 8 | 
 9 | function ComponentContent({ ...props }: React.ComponentProps<typeof Atom>) {
10 |   return (
11 |     <Atom
12 |       shade="50"
13 |       className="bg-muted/30 ring-muted flex aspect-video items-center justify-center rounded-lg p-4 ring *:w-full *:max-w-[70%]"
14 |       {...props}
15 |     />
16 |   )
17 | }
18 | 
19 | function ComponentName({ ...props }: React.ComponentProps<"div">) {
20 |   return (
21 |     <div
22 |       className="text-foreground text-center font-medium underline-offset-2 group-hover:underline"
23 |       {...props}
24 |     />
25 |   )
26 | }
27 | 
28 | export { Component, ComponentContent, ComponentName }
29 | 


--------------------------------------------------------------------------------
/components/lo-fi/index.tsx:
--------------------------------------------------------------------------------
 1 | import { AccordionLoFi } from "@/components/lo-fi/accordion"
 2 | import { AlertLoFi } from "@/components/lo-fi/alert"
 3 | import {
 4 |   Component,
 5 |   ComponentContent,
 6 |   ComponentName,
 7 | } from "@/components/lo-fi/component"
 8 | 
 9 | export function LoFi() {
10 |   return (
11 |     <div className="mx-auto grid max-w-[350px] gap-6 sm:max-w-none sm:grid-cols-2">
12 |       <Component href="/docs/components/accordion">
13 |         <ComponentContent>
14 |           <AccordionLoFi />
15 |         </ComponentContent>
16 |         <ComponentName>Accordion</ComponentName>
17 |       </Component>
18 |       <Component href="/docs/components/alert">
19 |         <ComponentContent>
20 |           <AlertLoFi />
21 |         </ComponentContent>
22 |         <ComponentName>Alert</ComponentName>
23 |       </Component>
24 |     </div>
25 |   )
26 | }
27 | 


--------------------------------------------------------------------------------
/components/main-nav.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import Link from "next/link"
 4 | import { usePathname } from "next/navigation"
 5 | 
 6 | import { cn } from "@/lib/utils"
 7 | import { Button } from "@/registry/new-york-v4/ui/button"
 8 | 
 9 | export function MainNav({
10 |   items,
11 |   className,
12 |   ...props
13 | }: React.ComponentProps<"nav"> & {
14 |   items: { href: string; label: string }[]
15 | }) {
16 |   const pathname = usePathname()
17 | 
18 |   return (
19 |     <nav className={cn("items-center gap-0.5", className)} {...props}>
20 |       {items.map((item) => (
21 |         <Button key={item.href} variant="ghost" asChild size="sm">
22 |           <Link
23 |             href={item.href}
24 |             className={cn(pathname === item.href && "text-primary")}
25 |           >
26 |             {item.label}
27 |           </Link>
28 |         </Button>
29 |       ))}
30 |     </nav>
31 |   )
32 | }
33 | 


--------------------------------------------------------------------------------
/components/mode-switcher.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import { useTheme } from "next-themes"
 5 | 
 6 | import { useMetaColor } from "@/hooks/use-meta-color"
 7 | import { Button } from "@/registry/new-york-v4/ui/button"
 8 | 
 9 | export function ModeSwitcher() {
10 |   const { setTheme, resolvedTheme } = useTheme()
11 |   const { setMetaColor, metaColor } = useMetaColor()
12 | 
13 |   React.useEffect(() => {
14 |     setMetaColor(metaColor)
15 |   }, [metaColor, setMetaColor])
16 | 
17 |   const toggleTheme = React.useCallback(() => {
18 |     setTheme(resolvedTheme === "dark" ? "light" : "dark")
19 |   }, [resolvedTheme, setTheme])
20 | 
21 |   return (
22 |     <Button
23 |       variant="ghost"
24 |       size="icon"
25 |       className="group/toggle extend-touch-target size-8"
26 |       onClick={toggleTheme}
27 |     >
28 |       <svg
29 |         xmlns="http://www.w3.org/2000/svg"
30 |         width="24"
31 |         height="24"
32 |         viewBox="0 0 24 24"
33 |         fill="none"
34 |         stroke="currentColor"
35 |         strokeWidth="2"
36 |         strokeLinecap="round"
37 |         strokeLinejoin="round"
38 |         className="size-4.5"
39 |       >
40 |         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
41 |         <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
42 |         <path d="M12 3l0 18" />
43 |         <path d="M12 9l4.65 -4.65" />
44 |         <path d="M12 14.3l7.37 -7.37" />
45 |         <path d="M12 19.6l8.85 -8.85" />
46 |       </svg>
47 |       <span className="sr-only">Toggle theme</span>
48 |     </Button>
49 |   )
50 | }
51 | 


--------------------------------------------------------------------------------
/components/nav-header.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import Link from "next/link"
 4 | import { usePathname } from "next/navigation"
 5 | 
 6 | import {
 7 |   NavigationMenu,
 8 |   NavigationMenuItem,
 9 |   NavigationMenuLink,
10 |   NavigationMenuList,
11 | } from "@/registry/new-york-v4/ui/navigation-menu"
12 | 
13 | export function NavHeader() {
14 |   const pathname = usePathname()
15 | 
16 |   return (
17 |     <NavigationMenu className="hidden sm:flex">
18 |       <NavigationMenuList className="gap-2 *:data-[slot=navigation-menu-item]:h-7 **:data-[slot=navigation-menu-link]:py-1 **:data-[slot=navigation-menu-link]:font-medium">
19 |         <NavigationMenuItem>
20 |           <NavigationMenuLink asChild data-active={pathname === "/"}>
21 |             <Link href="/">Home</Link>
22 |           </NavigationMenuLink>
23 |         </NavigationMenuItem>
24 |         <NavigationMenuItem>
25 |           <NavigationMenuLink asChild data-active={pathname === "/charts"}>
26 |             <Link href="/charts">Charts</Link>
27 |           </NavigationMenuLink>
28 |         </NavigationMenuItem>
29 |         <NavigationMenuItem>
30 |           <NavigationMenuLink asChild data-active={pathname === "/forms"}>
31 |             <Link href="/forms">Forms</Link>
32 |           </NavigationMenuLink>
33 |         </NavigationMenuItem>
34 |       </NavigationMenuList>
35 |     </NavigationMenu>
36 |   )
37 | }
38 | 


--------------------------------------------------------------------------------
/components/open-in-v0-button.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils"
 2 | import { Icons } from "@/components/icons"
 3 | import { Button } from "@/registry/new-york-v4/ui/button"
 4 | 
 5 | // v0 uses the default style.
 6 | const V0_STYLE = "default"
 7 | 
 8 | export function OpenInV0Button({
 9 |   name,
10 |   className,
11 |   ...props
12 | }: React.ComponentProps<typeof Button> & {
13 |   name: string
14 | }) {
15 |   return (
16 |     <Button
17 |       size="sm"
18 |       asChild
19 |       className={cn("h-[1.8rem] gap-1", className)}
20 |       {...props}
21 |     >
22 |       <a
23 |         href={`${process.env.NEXT_PUBLIC_V0_URL}/chat/api/open?url=${process.env.NEXT_PUBLIC_APP_URL}/r/styles/${V0_STYLE}/${name}.json`}
24 |         target="_blank"
25 |       >
26 |         Open in <Icons.v0 className="size-5" />
27 |       </a>
28 |     </Button>
29 |   )
30 | }
31 | 


--------------------------------------------------------------------------------
/components/open-in-v0-cta.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils"
 2 | import { Button } from "@/registry/new-york-v4/ui/button"
 3 | 
 4 | export function OpenInV0Cta({ className }: React.ComponentProps<"div">) {
 5 |   return null
 6 |   return (
 7 |     <div
 8 |       className={cn(
 9 |         "group bg-surface text-surface-foreground relative flex flex-col gap-2 rounded-lg p-6 text-sm",
10 |         className
11 |       )}
12 |     >
13 |       <div className="text-base leading-tight font-semibold text-balance group-hover:underline">
14 |         Deploy your shadcn/ui app on Vercel
15 |       </div>
16 |       <div className="text-muted-foreground">
17 |         Trusted by OpenAI, Sonos, Chick-fil-A, and more.
18 |       </div>
19 |       <div className="text-muted-foreground">
20 |         Vercel provides tools and infrastructure to deploy apps and features at
21 |         scale.
22 |       </div>
23 |       <Button size="sm" className="mt-2 w-fit">
24 |         Deploy Now
25 |       </Button>
26 |       <a
27 |         href="https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout"
28 |         target="_blank"
29 |         rel="noreferrer"
30 |         className="absolute inset-0"
31 |       >
32 |         <span className="sr-only">Deploy to Vercel</span>
33 |       </a>
34 |     </div>
35 |   )
36 | }
37 | 


--------------------------------------------------------------------------------
/components/page-nav.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils"
 2 | 
 3 | export function PageNav({
 4 |   children,
 5 |   className,
 6 |   ...props
 7 | }: React.ComponentProps<"div">) {
 8 |   return (
 9 |     <div className={cn("container-wrapper scroll-mt-24", className)} {...props}>
10 |       <div className="container flex items-center justify-between gap-4 py-4">
11 |         {children}
12 |       </div>
13 |     </div>
14 |   )
15 | }
16 | 


--------------------------------------------------------------------------------
/components/site-footer.tsx:
--------------------------------------------------------------------------------
 1 | import { siteConfig } from "@/lib/config"
 2 | 
 3 | export function SiteFooter() {
 4 |   return (
 5 |     <footer className="group-has-[.section-soft]/body:bg-surface/40 dark:bg-transparent">
 6 |       <div className="container-wrapper px-4 xl:px-6">
 7 |         <div className="flex h-(--footer-height) items-center justify-between">
 8 |           <div className="text-muted-foreground w-full text-center text-xs leading-loose sm:text-sm">
 9 |             Built by{" "}
10 |             <a
11 |               href={siteConfig.links.twitter}
12 |               target="_blank"
13 |               rel="noreferrer"
14 |               className="font-medium underline underline-offset-4"
15 |             >
16 |               htmujahid
17 |             </a>
18 |             . The source code is available on{" "}
19 |             <a
20 |               href={siteConfig.links.github}
21 |               target="_blank"
22 |               rel="noreferrer"
23 |               className="font-medium underline underline-offset-4"
24 |             >
25 |               GitHub
26 |             </a>
27 |             .
28 |           </div>
29 |         </div>
30 |       </div>
31 |     </footer>
32 |   )
33 | }
34 | 


--------------------------------------------------------------------------------
/components/tailwind-indicator.tsx:
--------------------------------------------------------------------------------
 1 | const SHOW = false
 2 | 
 3 | export function TailwindIndicator() {
 4 |   if (process.env.NODE_ENV === "production" || !SHOW) {
 5 |     return null
 6 |   }
 7 | 
 8 |   return (
 9 |     <div
10 |       data-tailwind-indicator=""
11 |       className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white"
12 |     >
13 |       <div className="block sm:hidden">xs</div>
14 |       <div className="hidden sm:block md:hidden">sm</div>
15 |       <div className="hidden md:block lg:hidden">md</div>
16 |       <div className="hidden lg:block xl:hidden">lg</div>
17 |       <div className="hidden xl:block 2xl:hidden">xl</div>
18 |       <div className="hidden 2xl:block">2xl</div>
19 |     </div>
20 |   )
21 | }
22 | 


--------------------------------------------------------------------------------
/components/theme-provider.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import { ThemeProvider as NextThemesProvider } from "next-themes"
 5 | 
 6 | export function ThemeProvider({
 7 |   children,
 8 |   ...props
 9 | }: React.ComponentProps<typeof NextThemesProvider>) {
10 |   return (
11 |     <NextThemesProvider
12 |       attribute="class"
13 |       defaultTheme="system"
14 |       enableSystem
15 |       disableTransitionOnChange
16 |       enableColorScheme
17 |       {...props}
18 |     >
19 |       {children}
20 |     </NextThemesProvider>
21 |   )
22 | }
23 | 


--------------------------------------------------------------------------------
/content/docs/(root)/meta.json:
--------------------------------------------------------------------------------
1 | {
2 |   "title": "Get Started",
3 |   "pages": [
4 |     "index",
5 |     "[Installation](/docs/installation)",
6 |     "[Plugins](/docs/plugins)"
7 |   ]
8 | }


--------------------------------------------------------------------------------
/content/docs/meta.json:
--------------------------------------------------------------------------------
1 | {
2 |   "root": true,
3 |   "pages": [
4 |     "(root)",
5 |     "plugins"
6 |   ]
7 | }
8 | 


--------------------------------------------------------------------------------
/content/docs/plugins/actions.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Actions
 3 | description: A plugin that provides core editor actions and functionality for the rich text editor.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="actions-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides core editor actions and functionality for the rich text editor."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/actions-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="actions-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/actions/clear-editor.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Clear Editor
 3 | description: A plugin that provides a dialog to safely clear all content from the editor.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="clear-editor-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides a dialog to safely clear all content from the editor."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/clear-editor-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="clear-editor-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/actions/counter-character.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Counter Character
 3 | description: A plugin that displays and tracks the current character count in the editor.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="counter-character-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that displays and tracks the current character count in the editor."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/counter-character-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/text
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="counter-character-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/actions/edit-mode-toggle.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Edit Mode Toggle
 3 | description: A plugin that enables switching between edit and preview modes of the editor.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="edit-mode-toggle-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that enables switching between edit and preview modes of the editor."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/edit-mode-toggle-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="edit-mode-toggle-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/actions/import-export.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Import Export
 3 | description: A plugin that enables importing and exporting editor content with file handling capabilities.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="import-export-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that enables importing and exporting editor content with file handling capabilities."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/import-export-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/file
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="import-export-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/actions/markdown-toggle.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Markdown Toggle
 3 | description: A plugin that enables switching between rich text and markdown editing modes.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="markdown-toggle-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that enables switching between rich text and markdown editing modes."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/markdown-toggle-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/markdown @lexical/code
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="markdown-toggle-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/actions/max-length.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Max Length
 3 | description: A plugin that enforces a maximum character limit on the editor content.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="max-length-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that enforces a maximum character limit on the editor content."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/max-length-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils @lexical/selection
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="max-length-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/actions/share-content.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Share Content
 3 | description: A plugin that enables content sharing functionality with file export and toast notifications.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="share-content-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that enables content sharing functionality with file export and toast notifications."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/share-content-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/file sonner
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="share-content-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/actions/speech-to-text.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Speech to Text
 3 | description: A plugin that enables voice input functionality with browser's speech recognition API.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="speech-to-text-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that enables voice input functionality with browser's speech recognition API."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/speech-to-text-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="speech-to-text-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/actions/tree-view.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Tree View
 3 | description: A plugin that provides a visual tree view of the editor's document structure in a dialog.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="tree-view-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides a visual tree view of the editor's document structure in a dialog."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/tree-view-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="tree-view-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/auto-embed.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Auto Embed
 3 | description: A plugin that provides automatic embedding of content from various platforms including Twitter, YouTube, and Figma.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="auto-embed-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides embedding of content from various platforms including Twitter, YouTube, and Figma."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/auto-embed-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils @lexical/markdown
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="auto-embed-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/auto-focus.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Auto Focus
 3 | description: A plugin that automatically focuses the editor when it is mounted.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="auto-focus-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that automatically focuses the editor when it is mounted."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/auto-focus-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="auto-focus-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/autocomplete.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Autocomplete
 3 | description: A plugin that provides text autocompletion with swipe support and shared context.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="autocomplete-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides text autocompletion with swipe support and shared context."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/autocomplete-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils @lexical/selection
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="autocomplete-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/code.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Code
 3 | description: A plugin that provides code block formatting, syntax highlighting, and language selection.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="code-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides code block formatting, syntax highlighting, and language selection."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/code-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install lodash-es @lexical/utils @lexical/code @lexical/selection
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="code-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/collapsible.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Collapsible
 3 | description: A plugin that provides collapsible sections with title and content nodes.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="collapsible-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides collapsible sections with title and content nodes."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/collapsible-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="collapsible-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/component-picker-menu.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Component Picker Menu
 3 | description: A plugin that provides a modal-based component picker with typeahead menu support.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="component-picker-menu-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides a modal-based component picker with typeahead menu support."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/component-picker-menu-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="component-picker-menu-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/context-menu.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Context Menu
 3 | description: A plugin that provides a popover-based context menu with link support.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="context-menu-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides a popover-based context menu with link support."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/context-menu-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/link
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="context-menu-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/drag-drop-paste.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Drag Drop Paste
 3 | description: A plugin that provides drag and drop functionality with image paste support.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="drag-drop-paste-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides drag and drop functionality with image paste support."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/drag-drop-paste-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="drag-drop-paste-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/draggable-block.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Draggable Block
 3 | description: A plugin that enables drag and drop functionality for editor blocks.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="draggable-block-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that enables drag and drop functionality for editor blocks."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/draggable-block-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="draggable-block-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/emoji.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Emoji
 3 | description: A plugin that provides emoji picker, insertion, and markdown support.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="emoji-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides emoji picker, insertion, and markdown support."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/emoji-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="emoji-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/equation.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Equation
 3 | description: A plugin that provides LaTeX equation editing and rendering with KaTeX support.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="equation-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides LaTeX equation editing and rendering with KaTeX support."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/equation-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install katex react-error-boundary @lexical/utils @lexical/markdown
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="equation-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/excalidraw.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Excalidraw
 3 | description: A plugin that provides a drawing canvas with Excalidraw integration and modal interface.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="excalidraw-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides a drawing canvas with Excalidraw integration and modal interface."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/excalidraw-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @excalidraw/excalidraw @lexical/utils
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="excalidraw-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/floating-text-format.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Floating Text Format
 3 | description: A plugin that provides a floating toolbar for text formatting with code, link, and selection support.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="floating-text-format-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides a floating toolbar for text formatting with code, link, and selection support."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/floating-text-format-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/code @lexical/link @lexical/utils @lexical/selection
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="floating-text-format-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/hashtag.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Hashtag
 3 | description: A plugin that enables hashtag functionality with automatic detection and styling.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="hashtag-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that enables hashtag functionality with automatic detection and styling."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/hashtag-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/hashtag
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="hashtag-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/horizontal-rule.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Horizontal Rule
 3 | description: A plugin that provides horizontal rule insertion and styling functionality.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="horizontal-rule-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides horizontal rule insertion and styling functionality."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/horizontal-rule-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="horizontal-rule-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/image.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Image
 3 | description: A plugin that provides image insertion, resizing, and markdown support with a dialog interface.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="image-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides image insertion, resizing, and markdown support with a dialog interface."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/image-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils @lexical/markdown
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="image-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/inline-image.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Inline Image
 3 | description: A plugin that provides inline image insertion with link support and a dialog interface.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="inline-image-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides inline image insertion with link support and a dialog interface."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/inline-image-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="inline-image-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/keywords.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Keywords
 3 | description: A plugin that provides keyword highlighting and styling functionality.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="keywords-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides keyword highlighting and styling functionality."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/keywords-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="keywords-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/layout.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Layout
 3 | description: A plugin that provides column-based layout containers with customizable structure.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="layout-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides column-based layout containers with customizable structure."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/layout-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="layout-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/link.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Link
 3 | description: A plugin that provides URL validation and link handling functionality for the editor.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="link-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides URL validation and link handling functionality for the editor."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/link-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="link-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/markdown.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Markdown
 3 | description: A plugin that provides markdown parsing and serialization support for the editor.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="markdown-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides markdown parsing and serialization support for the editor."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/markdown-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/markdown
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="markdown-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/mention.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Mention
 3 | description: A plugin that provides user mention functionality with typeahead menu support.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="mention-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides user mention functionality with typeahead menu support."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/mention-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="mention-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/page-break.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Page Break
 3 | description: A plugin that provides page break insertion and styling functionality.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="page-break-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides page break insertion and styling functionality."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/page-break-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="page-break-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/poll.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Poll
 3 | description: A plugin that provides poll creation and voting functionality with a dialog interface.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="poll-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides poll creation and voting functionality with a dialog interface."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/poll-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="poll-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/rich-text-editor.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Rich Text Editor
 3 | description: A content editable component for the Lexical editor that provides rich text editing capabilities.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="rich-text-editor-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="An rich text editor with shadcn/ui components"
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/rich-text-editor-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/rich-text
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="rich-text-editor-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/tab-focus.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Tab Focus
 3 | description: A plugin that manages tab focus behavior within the editor.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="tab-focus-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that manages tab focus behavior within the editor."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/tab-focus-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="tab-focus-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/table.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Table
 3 | description: A plugin that provides table creation, editing, resizing, and markdown table support.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="table-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides table creation, editing, resizing, and markdown table support."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/table-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install lodash-es react-colorful @lexical/table @lexical/utils @lexical/markdown
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="table-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/toolbar.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Toolbar
 3 | description: A toolbar plugin that provides formatting controls and context management for the rich text editor.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="toolbar-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A toolbar plugin for the rich text editor."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/toolbar-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="toolbar-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/content/docs/plugins/toolbar/block-format-toolbar.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Block Format
 3 | description: A toolbar plugin that provides block-level formatting options including lists, paragraphs, and quotes.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="block-format-toolbar-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A block format plugin for the rich text editor."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/block-format-toolbar-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/list @lexical/utils @lexical/selection @lexical/code
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="block-format-toolbar-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/toolbar/clear-formatting-toolbar.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Clear Formatting Toolbar
 3 | description: A toolbar plugin that provides a button to remove all text formatting from the selected content.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="clear-formatting-toolbar-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A toolbar plugin that provides a button to remove all text formatting from the selected content."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/clear-formatting-toolbar-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils @lexical/table
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="clear-formatting-toolbar-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/toolbar/element-format-toolbar.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Element Format Toolbar
 3 | description: A toolbar plugin that provides element-level formatting controls for text alignment and indentation.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="element-format-toolbar-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A toolbar plugin that provides element-level formatting controls for text alignment and indentation."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/element-format-toolbar-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/link @lexical/utils @lexical/selection
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="element-format-toolbar-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/toolbar/font-color-toolbar.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Font Color Toolbar
 3 | description: A toolbar plugin that provides text color and background color selection with a color picker.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="font-color-toolbar-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A toolbar plugin that provides text color and background color selection with a color picker."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/font-color-toolbar-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install react-colorful @lexical/selection
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="font-color-toolbar-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/toolbar/font-family-toolbar.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Font Family Toolbar
 3 | description: A font family toolbar plugin.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="font-family-toolbar-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A font family toolbar plugin"
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/font-family-toolbar-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/selection
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="font-family-toolbar-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/toolbar/font-format-toolbar.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Font Format Toolbar
 3 | description: A toolbar plugin that provides font family selection and text formatting options.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="font-format-toolbar-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A toolbar plugin that provides font family selection and text formatting options."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/font-format-toolbar-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/table
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="font-format-toolbar-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/toolbar/font-size-toolbar.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Font Size Toolbar
 3 | description: A toolbar plugin that provides font size selection and adjustment controls.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="font-size-toolbar-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A font size toolbar plugin"
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/font-size-toolbar-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/selection
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="font-size-toolbar-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/toolbar/history-toolbar.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: History Toolbar
 3 | description: A toolbar plugin that provides undo/redo functionality for the rich text editor.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="history-toolbar-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A history toolbar plugin for the rich text editor."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/history-toolbar-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/utils
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="history-toolbar-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/toolbar/link-toolbar.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Link Toolbar
 3 | description: A toolbar plugin that provides link creation, editing, and removal functionality with URL validation.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="link-toolbar-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A toolbar plugin that provides link creation, editing, and removal functionality with URL validation."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/link-toolbar-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/link @lexical/utils @lexical/selection
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="link-toolbar-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/toolbar/subsuper-toolbar.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Subsuper Toolbar
 3 | description: A toolbar plugin that provides subscript and superscript text formatting options.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="subsuper-toolbar-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A toolbar plugin that provides subscript and superscript text formatting options."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/subsuper-toolbar-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Install the following dependencies:</Step>
34 | 
35 | ```bash
36 | npm install @lexical/table
37 | ```
38 | 
39 | <Step>Copy and paste the following code into your project.</Step>
40 | 
41 | <ComponentSource name="subsuper-toolbar-plugin" />
42 | 
43 | <Step>Update the import paths to match your project setup.</Step>
44 | 
45 | </Steps>
46 | 
47 | </TabsContent>
48 | 
49 | </Tabs>
50 | 


--------------------------------------------------------------------------------
/content/docs/plugins/typing-pref.mdx:
--------------------------------------------------------------------------------
 1 | ---
 2 | title: Typing Pref
 3 | description: A plugin that provides typing preferences and reporting functionality.
 4 | ---
 5 | 
 6 | <ComponentPreview
 7 |   name="typing-pref-plugin-demo"
 8 |   className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
 9 |   description="A plugin that provides typing preferences and reporting functionality."
10 | />
11 | 
12 | ## Installation
13 | 
14 | <Tabs defaultValue="cli">
15 | 
16 | <TabsList>
17 |   <TabsTrigger value="cli">CLI</TabsTrigger>
18 |   <TabsTrigger value="manual">Manual</TabsTrigger>
19 | </TabsList>
20 | 
21 | <TabsContent value="cli">
22 | 
23 | ```bash
24 | npx shadcn@latest add https://shadcn-editor.vercel.app/r/typing-pref-plugin.json
25 | ```
26 | 
27 | </TabsContent>
28 | 
29 | <TabsContent value="manual">
30 | 
31 | <Steps>
32 | 
33 | <Step>Copy and paste the following code into your project.</Step>
34 | 
35 | <ComponentSource name="typing-pref-plugin" />
36 | 
37 | <Step>Update the import paths to match your project setup.</Step>
38 | 
39 | </Steps>
40 | 
41 | </TabsContent>
42 | 
43 | </Tabs>
44 | 


--------------------------------------------------------------------------------
/eslint.config.mjs:
--------------------------------------------------------------------------------
 1 | import { dirname } from "path"
 2 | import { fileURLToPath } from "url"
 3 | import { FlatCompat } from "@eslint/eslintrc"
 4 | 
 5 | const __filename = fileURLToPath(import.meta.url)
 6 | const __dirname = dirname(__filename)
 7 | 
 8 | const compat = new FlatCompat({
 9 |   baseDirectory: __dirname,
10 | })
11 | 
12 | const eslintConfig = [
13 |   ...compat.config({
14 |     extends: ["next/core-web-vitals", "next/typescript"],
15 |     rules: {
16 |       "@next/next/no-duplicate-head": "off",
17 |     },
18 |   }),
19 | ]
20 | 
21 | export default eslintConfig
22 | 


--------------------------------------------------------------------------------
/hooks/use-colors.ts:
--------------------------------------------------------------------------------
 1 | import { useAtom } from "jotai"
 2 | import { atomWithStorage } from "jotai/utils"
 3 | 
 4 | import { ColorFormat } from "@/lib/colors"
 5 | import { useMounted } from "@/hooks/use-mounted"
 6 | 
 7 | type Config = {
 8 |   format: ColorFormat
 9 |   lastCopied: string
10 | }
11 | 
12 | const colorsAtom = atomWithStorage<Config>("colors", {
13 |   format: "hsl",
14 |   lastCopied: "",
15 | })
16 | 
17 | export function useColors() {
18 |   const [colors, setColors] = useAtom(colorsAtom)
19 |   const mounted = useMounted()
20 | 
21 |   return {
22 |     isLoading: !mounted,
23 |     format: colors.format,
24 |     lastCopied: colors.lastCopied,
25 |     setFormat: (format: ColorFormat) => setColors({ ...colors, format }),
26 |     setLastCopied: (lastCopied: string) => setColors({ ...colors, lastCopied }),
27 |   }
28 | }
29 | 


--------------------------------------------------------------------------------
/hooks/use-config.ts:
--------------------------------------------------------------------------------
 1 | import { useAtom } from "jotai"
 2 | import { atomWithStorage } from "jotai/utils"
 3 | 
 4 | type Config = {
 5 |   style: "new-york-v4"
 6 |   packageManager: "npm" | "yarn" | "pnpm" | "bun"
 7 |   installationType: "cli" | "manual"
 8 | }
 9 | 
10 | const configAtom = atomWithStorage<Config>("config", {
11 |   style: "new-york-v4",
12 |   packageManager: "pnpm",
13 |   installationType: "cli",
14 | })
15 | 
16 | export function useConfig() {
17 |   return useAtom(configAtom)
18 | }
19 | 


--------------------------------------------------------------------------------
/hooks/use-copy-to-clipboard.ts:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | 
 5 | export function useCopyToClipboard({
 6 |   timeout = 2000,
 7 |   onCopy,
 8 | }: {
 9 |   timeout?: number
10 |   onCopy?: () => void
11 | } = {}) {
12 |   const [isCopied, setIsCopied] = React.useState(false)
13 | 
14 |   const copyToClipboard = (value: string) => {
15 |     if (typeof window === "undefined" || !navigator.clipboard.writeText) {
16 |       return
17 |     }
18 | 
19 |     if (!value) return
20 | 
21 |     navigator.clipboard.writeText(value).then(() => {
22 |       setIsCopied(true)
23 | 
24 |       if (onCopy) {
25 |         onCopy()
26 |       }
27 | 
28 |       if (timeout !== 0) {
29 |         setTimeout(() => {
30 |           setIsCopied(false)
31 |         }, timeout)
32 |       }
33 |     }, console.error)
34 |   }
35 | 
36 |   return { isCopied, copyToClipboard }
37 | }
38 | 


--------------------------------------------------------------------------------
/hooks/use-is-mac.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect, useState } from "react"
 2 | 
 3 | export function useIsMac() {
 4 |   const [isMac, setIsMac] = useState(true)
 5 | 
 6 |   useEffect(() => {
 7 |     setIsMac(navigator.platform.toUpperCase().includes("MAC"))
 8 |   }, [])
 9 | 
10 |   return isMac
11 | }
12 | 


--------------------------------------------------------------------------------
/hooks/use-media-query.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | 
 3 | export function useMediaQuery(query: string) {
 4 |   const [value, setValue] = React.useState(false)
 5 | 
 6 |   React.useEffect(() => {
 7 |     function onChange(event: MediaQueryListEvent) {
 8 |       setValue(event.matches)
 9 |     }
10 | 
11 |     const result = matchMedia(query)
12 |     result.addEventListener("change", onChange)
13 |     setValue(result.matches)
14 | 
15 |     return () => result.removeEventListener("change", onChange)
16 |   }, [query])
17 | 
18 |   return value
19 | }
20 | 


--------------------------------------------------------------------------------
/hooks/use-meta-color.ts:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | import { useTheme } from "next-themes"
 3 | 
 4 | export const META_THEME_COLORS = {
 5 |   light: "#ffffff",
 6 |   dark: "#0a0a0a",
 7 | }
 8 | 
 9 | export function useMetaColor() {
10 |   const { resolvedTheme } = useTheme()
11 | 
12 |   const metaColor = React.useMemo(() => {
13 |     return resolvedTheme !== "dark"
14 |       ? META_THEME_COLORS.light
15 |       : META_THEME_COLORS.dark
16 |   }, [resolvedTheme])
17 | 
18 |   const setMetaColor = React.useCallback((color: string) => {
19 |     document
20 |       .querySelector('meta[name="theme-color"]')
21 |       ?.setAttribute("content", color)
22 |   }, [])
23 | 
24 |   return {
25 |     metaColor,
26 |     setMetaColor,
27 |   }
28 | }
29 | 


--------------------------------------------------------------------------------
/hooks/use-mounted.ts:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | 
 3 | export function useMounted() {
 4 |   const [mounted, setMounted] = React.useState(false)
 5 | 
 6 |   React.useEffect(() => {
 7 |     setMounted(true)
 8 |   }, [])
 9 | 
10 |   return mounted
11 | }
12 | 


--------------------------------------------------------------------------------
/hooks/use-mutation-observer.ts:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | 
 3 | export const useMutationObserver = (
 4 |   ref: React.RefObject<HTMLElement | null>,
 5 |   callback: MutationCallback,
 6 |   options: MutationObserverInit = {
 7 |     attributes: true,
 8 |     characterData: true,
 9 |     childList: true,
10 |     subtree: true,
11 |   }
12 | ) => {
13 |   React.useEffect(() => {
14 |     if (ref.current) {
15 |       const observer = new MutationObserver(callback)
16 |       observer.observe(ref.current, options)
17 |       return () => observer.disconnect()
18 |     }
19 |   }, [ref, callback, options])
20 | }
21 | 


--------------------------------------------------------------------------------
/lib/blocks.ts:
--------------------------------------------------------------------------------
 1 | "use server"
 2 | 
 3 | import { registryItemSchema } from "@/registry/schema"
 4 | import { z } from "zod"
 5 | 
 6 | export async function getAllBlockIds(
 7 |   types: z.infer<typeof registryItemSchema>["type"][] = [
 8 |     "registry:block",
 9 |     "registry:internal",
10 |   ],
11 |   categories: string[] = []
12 | ): Promise<string[]> {
13 |   const blocks = await getAllBlocks(types, categories)
14 | 
15 |   return blocks.map((block) => block.name)
16 | }
17 | 
18 | export async function getAllBlocks(
19 |   types: z.infer<typeof registryItemSchema>["type"][] = [
20 |     "registry:block",
21 |     "registry:internal",
22 |   ],
23 |   categories: string[] = []
24 | ) {
25 |   const { Index } = await import("@/registry/__index__")
26 |   const index = z.record(registryItemSchema).parse(Index)
27 | 
28 |   return Object.values(index).filter(
29 |     (block) =>
30 |       types.includes(block.type) &&
31 |       (categories.length === 0 ||
32 |         block.categories?.some((category) => categories.includes(category))) &&
33 |       !block.name.startsWith("chart-")
34 |   )
35 | }


--------------------------------------------------------------------------------
/lib/config.ts:
--------------------------------------------------------------------------------
 1 | export const siteConfig = {
 2 |   name: "shadcn/editor",
 3 |   url: "https://shadcn-editor.vercel.app",
 4 |   ogImage: "https://shadcn-editor.vercel.app/og.jpg",
 5 |   description:
 6 |     "Lexical based text editor using shadcn/ui. Accessible. Customizable. Open Source.",
 7 |   links: {
 8 |     twitter: "https://twitter.com/htmujahid",
 9 |     github: "https://github.com/htmujahid/shadcn-editor",
10 |   },
11 |   navItems: [
12 |     {
13 |       label: "Docs",
14 |       href: "/docs",
15 |     },
16 |     {
17 |       label: "Plugins",
18 |       href: "/docs/plugins",
19 |     },
20 |     {
21 |       label: "Blocks",
22 |       href: "/blocks",
23 |     },
24 |   ],
25 | }
26 | 
27 | export const META_THEME_COLORS = {
28 |   light: "#ffffff",
29 |   dark: "#09090b",
30 | }
31 | 


--------------------------------------------------------------------------------
/lib/events.ts:
--------------------------------------------------------------------------------
 1 | import va from "@vercel/analytics"
 2 | import { z } from "zod"
 3 | 
 4 | const eventSchema = z.object({
 5 |   name: z.enum([
 6 |     "copy_npm_command",
 7 |     "copy_usage_import_code",
 8 |     "copy_usage_code",
 9 |     "copy_primitive_code",
10 |     "copy_theme_code",
11 |     "copy_block_code",
12 |     "copy_chunk_code",
13 |     "enable_lift_mode",
14 |     "copy_chart_code",
15 |     "copy_chart_theme",
16 |     "copy_chart_data",
17 |     "copy_color",
18 |   ]),
19 |   // declare type AllowedPropertyValues = string | number | boolean | null
20 |   properties: z
21 |     .record(z.union([z.string(), z.number(), z.boolean(), z.null()]))
22 |     .optional(),
23 | })
24 | 
25 | export type Event = z.infer<typeof eventSchema>
26 | 
27 | export function trackEvent(input: Event): void {
28 |   const event = eventSchema.parse(input)
29 |   if (event) {
30 |     va.track(event.name, event.properties)
31 |   }
32 | }
33 | 


--------------------------------------------------------------------------------
/lib/fonts.ts:
--------------------------------------------------------------------------------
 1 | import {
 2 |   Geist_Mono as FontMono,
 3 |   Geist as FontSans,
 4 |   Inter,
 5 | } from "next/font/google"
 6 | 
 7 | import { cn } from "@/lib/utils"
 8 | 
 9 | const fontSans = FontSans({
10 |   subsets: ["latin"],
11 |   variable: "--font-sans",
12 | })
13 | 
14 | const fontMono = FontMono({
15 |   subsets: ["latin"],
16 |   variable: "--font-mono",
17 |   weight: ["400"],
18 | })
19 | 
20 | const fontInter = Inter({
21 |   subsets: ["latin"],
22 |   variable: "--font-inter",
23 | })
24 | 
25 | export const fontVariables = cn(
26 |   fontSans.variable,
27 |   fontMono.variable,
28 |   fontInter.variable
29 | )
30 | 


--------------------------------------------------------------------------------
/lib/source.ts:
--------------------------------------------------------------------------------
1 | import { docs } from "@/.source"
2 | import { loader } from "fumadocs-core/source"
3 | 
4 | export const source: ReturnType<typeof loader> = loader({
5 |   baseUrl: "/docs",
6 |   source: docs.toFumadocsSource(),
7 | })
8 | 


--------------------------------------------------------------------------------
/lib/themes.ts:
--------------------------------------------------------------------------------
 1 | export const THEMES = [
 2 |   {
 3 |     name: "Default",
 4 |     value: "default",
 5 |   },
 6 |   {
 7 |     name: "Neutral",
 8 |     value: "neutral",
 9 |   },
10 |   {
11 |     name: "Stone",
12 |     value: "stone",
13 |   },
14 |   {
15 |     name: "Zinc",
16 |     value: "zinc",
17 |   },
18 |   {
19 |     name: "Gray",
20 |     value: "gray",
21 |   },
22 |   {
23 |     name: "Slate",
24 |     value: "slate",
25 |   },
26 |   {
27 |     name: "Scaled",
28 |     value: "scaled",
29 |   },
30 | ]
31 | export type Theme = (typeof THEMES)[number]
32 | 


--------------------------------------------------------------------------------
/lib/utils.ts:
--------------------------------------------------------------------------------
 1 | import { clsx, type ClassValue } from "clsx"
 2 | import { twMerge } from "tailwind-merge"
 3 | 
 4 | export function cn(...inputs: ClassValue[]) {
 5 |   return twMerge(clsx(inputs))
 6 | }
 7 | 
 8 | export function absoluteUrl(path: string) {
 9 |   return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
10 | }
11 | 


--------------------------------------------------------------------------------
/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | const config = {
2 |   plugins: {
3 |     "@tailwindcss/postcss": {},
4 |   },
5 | }
6 | export default config
7 | 


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/htmujahid/shadcn-editor/f17f4298bec8e073820456bd09c834dfa235506e/public/android-chrome-192x192.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/htmujahid/shadcn-editor/f17f4298bec8e073820456bd09c834dfa235506e/public/android-chrome-512x512.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/htmujahid/shadcn-editor/f17f4298bec8e073820456bd09c834dfa235506e/public/apple-touch-icon.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/htmujahid/shadcn-editor/f17f4298bec8e073820456bd09c834dfa235506e/public/avatars/shadcn.jpg


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/htmujahid/shadcn-editor/f17f4298bec8e073820456bd09c834dfa235506e/public/favicon-16x16.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/htmujahid/shadcn-editor/f17f4298bec8e073820456bd09c834dfa235506e/public/favicon-32x32.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/htmujahid/shadcn-editor/f17f4298bec8e073820456bd09c834dfa235506e/public/favicon.ico


--------------------------------------------------------------------------------
1 | <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>


--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>


--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/htmujahid/shadcn-editor/f17f4298bec8e073820456bd09c834dfa235506e/public/opengraph-image.png


--------------------------------------------------------------------------------
/public/r/actions-plugin.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://ui.shadcn.com/schema/registry-item.json",
 3 |   "name": "actions-plugin",
 4 |   "type": "registry:ui",
 5 |   "registryDependencies": [
 6 |     "https://shadcn-editor.vercel.app/r/rich-text-editor-plugin.json"
 7 |   ],
 8 |   "files": [
 9 |     {
10 |       "path": "registry/new-york-v4/editor/plugins/actions/actions-plugin.tsx",
11 |       "content": "export function ActionsPlugin({ children }: { children: React.ReactNode }) {\n  return children\n}\n",
12 |       "type": "registry:component",
13 |       "target": "components/editor/plugins/actions/actions-plugin.tsx"
14 |     }
15 |   ]
16 | }


--------------------------------------------------------------------------------
/public/r/index.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://ui.shadcn.com/schema/registry-item.json",
 3 |   "name": "index",
 4 |   "type": "registry:style",
 5 |   "dependencies": [
 6 |     "class-variance-authority",
 7 |     "lucide-react"
 8 |   ],
 9 |   "devDependencies": [
10 |     "tw-animate-css"
11 |   ],
12 |   "registryDependencies": [
13 |     "utils"
14 |   ],
15 |   "files": [],
16 |   "cssVars": {}
17 | }


--------------------------------------------------------------------------------
/public/r/rich-text-editor-plugin.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://ui.shadcn.com/schema/registry-item.json",
 3 |   "name": "rich-text-editor-plugin",
 4 |   "type": "registry:ui",
 5 |   "dependencies": [
 6 |     "@lexical/rich-text"
 7 |   ],
 8 |   "registryDependencies": [
 9 |     "https://shadcn-editor.vercel.app/r/editor.json"
10 |   ],
11 |   "files": [
12 |     {
13 |       "path": "registry/new-york-v4/editor/editor-ui/content-editable.tsx",
14 |       "content": "import { JSX } from \"react\"\nimport { ContentEditable as LexicalContentEditable } from \"@lexical/react/LexicalContentEditable\"\n\ntype Props = {\n  placeholder: string\n  className?: string\n  placeholderClassName?: string\n}\n\nexport function ContentEditable({\n  placeholder,\n  className,\n  placeholderClassName,\n}: Props): JSX.Element {\n  return (\n    <LexicalContentEditable\n      className={\n        className ??\n        `ContentEditable__root relative block min-h-72 min-h-full overflow-auto px-8 py-4 focus:outline-none`\n      }\n      aria-placeholder={placeholder}\n      placeholder={\n        <div\n          className={\n            placeholderClassName ??\n            `text-muted-foreground pointer-events-none absolute top-0 left-0 overflow-hidden px-8 py-[18px] text-ellipsis select-none`\n          }\n        >\n          {placeholder}\n        </div>\n      }\n    />\n  )\n}\n",
15 |       "type": "registry:ui",
16 |       "target": "components/editor/editor-ui/content-editable.tsx"
17 |     }
18 |   ]
19 | }


--------------------------------------------------------------------------------
/public/r/styles/new-york-v4/actions-plugin.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://ui.shadcn.com/schema/registry-item.json",
 3 |   "name": "actions-plugin",
 4 |   "type": "registry:ui",
 5 |   "registryDependencies": [
 6 |     "https://shadcn-editor.vercel.app/r/rich-text-editor-plugin.json"
 7 |   ],
 8 |   "files": [
 9 |     {
10 |       "path": "registry/new-york-v4/editor/plugins/actions/actions-plugin.tsx",
11 |       "content": "export function ActionsPlugin({ children }: { children: React.ReactNode }) {\n  return children\n}\n",
12 |       "type": "registry:component",
13 |       "target": "components/editor/plugins/actions/actions-plugin.tsx"
14 |     }
15 |   ]
16 | }


--------------------------------------------------------------------------------
/public/r/styles/new-york-v4/index.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://ui.shadcn.com/schema/registry-item.json",
 3 |   "name": "index",
 4 |   "type": "registry:style",
 5 |   "dependencies": [
 6 |     "class-variance-authority",
 7 |     "lucide-react"
 8 |   ],
 9 |   "devDependencies": [
10 |     "tw-animate-css"
11 |   ],
12 |   "registryDependencies": [
13 |     "utils"
14 |   ],
15 |   "files": [],
16 |   "cssVars": {}
17 | }


--------------------------------------------------------------------------------
/public/r/styles/new-york-v4/rich-text-editor-plugin.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://ui.shadcn.com/schema/registry-item.json",
 3 |   "name": "rich-text-editor-plugin",
 4 |   "type": "registry:ui",
 5 |   "dependencies": [
 6 |     "@lexical/rich-text"
 7 |   ],
 8 |   "registryDependencies": [
 9 |     "https://shadcn-editor.vercel.app/r/editor.json"
10 |   ],
11 |   "files": [
12 |     {
13 |       "path": "registry/new-york-v4/editor/editor-ui/content-editable.tsx",
14 |       "content": "import { JSX } from \"react\"\nimport { ContentEditable as LexicalContentEditable } from \"@lexical/react/LexicalContentEditable\"\n\ntype Props = {\n  placeholder: string\n  className?: string\n  placeholderClassName?: string\n}\n\nexport function ContentEditable({\n  placeholder,\n  className,\n  placeholderClassName,\n}: Props): JSX.Element {\n  return (\n    <LexicalContentEditable\n      className={\n        className ??\n        `ContentEditable__root relative block min-h-72 min-h-full overflow-auto px-8 py-4 focus:outline-none`\n      }\n      aria-placeholder={placeholder}\n      placeholder={\n        <div\n          className={\n            placeholderClassName ??\n            `text-muted-foreground pointer-events-none absolute top-0 left-0 overflow-hidden px-8 py-[18px] text-ellipsis select-none`\n          }\n        >\n          {placeholder}\n        </div>\n      }\n    />\n  )\n}\n",
15 |       "type": "registry:ui",
16 |       "target": "components/editor/editor-ui/content-editable.tsx"
17 |     }
18 |   ]
19 | }


--------------------------------------------------------------------------------
/public/schema.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "http://json-schema.org/draft-07/schema#",
 3 |   "type": "object",
 4 |   "properties": {
 5 |     "style": {
 6 |       "type": "string",
 7 |       "enum": ["default", "new-york"]
 8 |     },
 9 |     "tailwind": {
10 |       "type": "object",
11 |       "properties": {
12 |         "config": {
13 |           "type": "string"
14 |         },
15 |         "css": {
16 |           "type": "string"
17 |         },
18 |         "baseColor": {
19 |           "type": "string"
20 |         },
21 |         "cssVariables": {
22 |           "type": "boolean"
23 |         },
24 |         "prefix": {
25 |           "type": "string"
26 |         }
27 |       },
28 |       "required": ["config", "css", "baseColor", "cssVariables"]
29 |     },
30 |     "rsc": {
31 |       "type": "boolean"
32 |     },
33 |     "tsx": {
34 |       "type": "boolean"
35 |     },
36 |     "iconLibrary": {
37 |       "type": "string"
38 |     },
39 |     "aliases": {
40 |       "type": "object",
41 |       "properties": {
42 |         "utils": {
43 |           "type": "string"
44 |         },
45 |         "components": {
46 |           "type": "string"
47 |         },
48 |         "ui": {
49 |           "type": "string"
50 |         },
51 |         "lib": {
52 |           "type": "string"
53 |         },
54 |         "hooks": {
55 |           "type": "string"
56 |         }
57 |       },
58 |       "required": ["utils", "components"]
59 |     }
60 |   },
61 |   "required": ["style", "tailwind", "rsc", "aliases"]
62 | }
63 | 


--------------------------------------------------------------------------------
/public/schema/registry.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://json-schema.org/draft-07/schema#",
 3 |   "description": "A shadcn registry of components, hooks, pages, etc.",
 4 |   "type": "object",
 5 |   "properties": {
 6 |     "name": {
 7 |       "type": "string"
 8 |     },
 9 |     "homepage": {
10 |       "type": "string"
11 |     },
12 |     "items": {
13 |       "type": "array",
14 |       "items": {
15 |         "$ref": "https://ui.shadcn.com/schema/registry-item.json"
16 |       }
17 |     }
18 |   },
19 |   "required": ["name", "homepage", "items"],
20 |   "uniqueItems": true,
21 |   "minItems": 1
22 | }
23 | 


--------------------------------------------------------------------------------
/public/site.webmanifest:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "",
 3 |   "short_name": "",
 4 |   "icons": [
 5 |     {
 6 |       "src": "/android-chrome-192x192.png",
 7 |       "sizes": "192x192",
 8 |       "type": "image/png"
 9 |     },
10 |     {
11 |       "src": "/android-chrome-512x512.png",
12 |       "sizes": "512x512",
13 |       "type": "image/png"
14 |     }
15 |   ],
16 |   "display": "standalone"
17 | }
18 | 


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/htmujahid/shadcn-editor/f17f4298bec8e073820456bd09c834dfa235506e/public/twitter-image.png


--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>


--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>


--------------------------------------------------------------------------------
/registry/__blocks__.json:
--------------------------------------------------------------------------------
 1 | [
 2 |   {
 3 |     "name": "editor",
 4 |     "description": ""
 5 |   },
 6 |   {
 7 |     "name": "editor-x",
 8 |     "description": ""
 9 |   }
10 | ]
11 | 


--------------------------------------------------------------------------------
/registry/index.ts:
--------------------------------------------------------------------------------
 1 | import { z } from "zod"
 2 | 
 3 | import { blocks } from "@/registry/registry-blocks"
 4 | import { charts } from "@/registry/registry-charts"
 5 | import { examples } from "@/registry/registry-examples"
 6 | import { hooks } from "@/registry/registry-hooks"
 7 | import { internal } from "@/registry/registry-internal"
 8 | import { lib } from "@/registry/registry-lib"
 9 | import { themes } from "@/registry/registry-themes"
10 | import { ui } from "@/registry/registry-ui"
11 | 
12 | import { Registry, registryItemSchema } from "./schema"
13 | 
14 | const DEPRECATED_ITEMS = [
15 |   "toast",
16 |   "toast-demo",
17 |   "toast-destructive",
18 |   "toast-simple",
19 |   "toast-with-action",
20 |   "toast-with-title",
21 | ]
22 | 
23 | export const registry = {
24 |   name: "shadcn-editor",
25 |   homepage: "https://shadcn-editor.vercel.app",
26 |   items: z.array(registryItemSchema).parse(
27 |     [
28 |       {
29 |         name: "index",
30 |         type: "registry:style",
31 |         dependencies: ["class-variance-authority", "lucide-react"],
32 |         devDependencies: ["tw-animate-css"],
33 |         registryDependencies: ["utils"],
34 |         cssVars: {},
35 |         files: [],
36 |       },
37 |       ...ui,
38 |       ...blocks,
39 |       ...charts,
40 |       ...lib,
41 |       ...hooks,
42 |       ...themes,
43 |       ...examples,
44 |       ...internal,
45 |     ].filter((item) => {
46 |       return !DEPRECATED_ITEMS.includes(item.name)
47 |     })
48 |   ),
49 | } satisfies Registry
50 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/blocks/editor-00/nodes.ts:
--------------------------------------------------------------------------------
 1 | import { HeadingNode, QuoteNode } from "@lexical/rich-text"
 2 | import {
 3 |   Klass,
 4 |   LexicalNode,
 5 |   LexicalNodeReplacement,
 6 |   ParagraphNode,
 7 |   TextNode,
 8 | } from "lexical"
 9 | 
10 | export const nodes: ReadonlyArray<Klass<LexicalNode> | LexicalNodeReplacement> =
11 |   [HeadingNode, ParagraphNode, TextNode, QuoteNode]
12 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/blocks/editor-00/page.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { useState } from "react"
 4 | import { SerializedEditorState } from "lexical"
 5 | 
 6 | import { Editor } from "@/registry/new-york-v4/blocks/editor-00/editor"
 7 | 
 8 | export const initialValue = {
 9 |   root: {
10 |     children: [
11 |       {
12 |         children: [
13 |           {
14 |             detail: 0,
15 |             format: 0,
16 |             mode: "normal",
17 |             style: "",
18 |             text: "Hello World 🚀",
19 |             type: "text",
20 |             version: 1,
21 |           },
22 |         ],
23 |         direction: "ltr",
24 |         format: "",
25 |         indent: 0,
26 |         type: "paragraph",
27 |         version: 1,
28 |       },
29 |     ],
30 |     direction: "ltr",
31 |     format: "",
32 |     indent: 0,
33 |     type: "root",
34 |     version: 1,
35 |   },
36 | } as unknown as SerializedEditorState
37 | 
38 | export default function EditorPage() {
39 |   const [editorState, setEditorState] =
40 |     useState<SerializedEditorState>(initialValue)
41 |   return (
42 |     <Editor
43 |       editorSerializedState={editorState}
44 |       onSerializedChange={(value) => setEditorState(value)}
45 |     />
46 |   )
47 | }
48 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/blocks/editor-00/plugins.tsx:
--------------------------------------------------------------------------------
 1 | import { useState } from "react"
 2 | import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
 3 | import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
 4 | 
 5 | import { ContentEditable } from "@/registry/new-york-v4/editor/editor-ui/content-editable"
 6 | 
 7 | export function Plugins() {
 8 |   const [floatingAnchorElem, setFloatingAnchorElem] =
 9 |     useState<HTMLDivElement | null>(null)
10 | 
11 |   const onRef = (_floatingAnchorElem: HTMLDivElement) => {
12 |     if (_floatingAnchorElem !== null) {
13 |       setFloatingAnchorElem(_floatingAnchorElem)
14 |     }
15 |   }
16 | 
17 |   return (
18 |     <div className="relative">
19 |       {/* toolbar plugins */}
20 |       <div className="relative">
21 |         <RichTextPlugin
22 |           contentEditable={
23 |             <div className="">
24 |               <div className="" ref={onRef}>
25 |                 <ContentEditable placeholder={"Start typing ..."} />
26 |               </div>
27 |             </div>
28 |           }
29 |           ErrorBoundary={LexicalErrorBoundary}
30 |         />
31 |         {/* editor plugins */}
32 |       </div>
33 |       {/* actions plugins */}
34 |     </div>
35 |   )
36 | }
37 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/blocks/editor-x/page.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { useState } from "react"
 4 | import { SerializedEditorState } from "lexical"
 5 | 
 6 | import { Editor } from "@/registry/new-york-v4/blocks/editor-x/editor"
 7 | 
 8 | export const initialValue = {
 9 |   root: {
10 |     children: [
11 |       {
12 |         children: [
13 |           {
14 |             detail: 0,
15 |             format: 0,
16 |             mode: "normal",
17 |             style: "",
18 |             text: "Hello World 🚀",
19 |             type: "text",
20 |             version: 1,
21 |           },
22 |         ],
23 |         direction: "ltr",
24 |         format: "",
25 |         indent: 0,
26 |         type: "paragraph",
27 |         version: 1,
28 |       },
29 |     ],
30 |     direction: "ltr",
31 |     format: "",
32 |     indent: 0,
33 |     type: "root",
34 |     version: 1,
35 |   },
36 | } as unknown as SerializedEditorState
37 | 
38 | export default function EditorPage() {
39 |   const [editorState, setEditorState] =
40 |     useState<SerializedEditorState>(initialValue)
41 |   return (
42 |     <Editor
43 |       editorSerializedState={editorState}
44 |       onSerializedChange={(value) => setEditorState(value)}
45 |     />
46 |   )
47 | }
48 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/context/floating-link-context.tsx:
--------------------------------------------------------------------------------
 1 | import { createContext, useContext, useState } from "react"
 2 | 
 3 | const Context = createContext<{
 4 |   isLinkEditMode: boolean
 5 |   setIsLinkEditMode: (isLinkEditMode: boolean) => void
 6 | }>({
 7 |   isLinkEditMode: false,
 8 |   setIsLinkEditMode: () => {},
 9 | })
10 | 
11 | export function FloatingLinkContext({
12 |   children,
13 | }: {
14 |   children: React.ReactNode
15 | }) {
16 |   const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false)
17 | 
18 |   return (
19 |     <Context.Provider value={{ isLinkEditMode, setIsLinkEditMode }}>
20 |       {children}
21 |     </Context.Provider>
22 |   )
23 | }
24 | 
25 | export function useFloatingLinkContext() {
26 |   if (!Context) {
27 |     throw new Error(
28 |       "useFloatingLinkContext must be used within a FloatingLinkContext"
29 |     )
30 |   }
31 |   return useContext(Context)
32 | }
33 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/context/toolbar-context.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { createContext, JSX, useContext } from "react"
 4 | import { LexicalEditor } from "lexical"
 5 | 
 6 | const Context = createContext<{
 7 |   activeEditor: LexicalEditor
 8 |   $updateToolbar: () => void
 9 |   blockType: string
10 |   setBlockType: (blockType: string) => void
11 |   showModal: (
12 |     title: string,
13 |     showModal: (onClose: () => void) => JSX.Element
14 |   ) => void
15 | }>({
16 |   activeEditor: {} as LexicalEditor,
17 |   $updateToolbar: () => {},
18 |   blockType: "paragraph",
19 |   setBlockType: () => {},
20 |   showModal: () => {},
21 | })
22 | 
23 | export function ToolbarContext({
24 |   activeEditor,
25 |   $updateToolbar,
26 |   blockType,
27 |   setBlockType,
28 |   showModal,
29 |   children,
30 | }: {
31 |   activeEditor: LexicalEditor
32 |   $updateToolbar: () => void
33 |   blockType: string
34 |   setBlockType: (blockType: string) => void
35 |   showModal: (
36 |     title: string,
37 |     showModal: (onClose: () => void) => JSX.Element
38 |   ) => void
39 |   children: React.ReactNode
40 | }) {
41 |   return (
42 |     <Context.Provider
43 |       value={{
44 |         activeEditor,
45 |         $updateToolbar,
46 |         blockType,
47 |         setBlockType,
48 |         showModal,
49 |       }}
50 |     >
51 |       {children}
52 |     </Context.Provider>
53 |   )
54 | }
55 | 
56 | export function useToolbarContext() {
57 |   return useContext(Context)
58 | }
59 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/editor-hooks/use-debounce.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | import { useMemo, useRef } from "react"
 9 | import { debounce } from "lodash-es"
10 | 
11 | export function useDebounce<T extends (...args: never[]) => void>(
12 |   fn: T,
13 |   ms: number,
14 |   maxWait?: number
15 | ) {
16 |   const funcRef = useRef<T | null>(null)
17 |   funcRef.current = fn
18 | 
19 |   return useMemo(
20 |     () =>
21 |       debounce(
22 |         (...args: Parameters<T>) => {
23 |           if (funcRef.current) {
24 |             funcRef.current(...args)
25 |           }
26 |         },
27 |         ms,
28 |         { maxWait }
29 |       ),
30 |     [ms, maxWait]
31 |   )
32 | }
33 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/editor-hooks/use-update-toolbar.ts:
--------------------------------------------------------------------------------
 1 | import { useEffect } from "react"
 2 | import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
 3 | import {
 4 |   $getSelection,
 5 |   BaseSelection,
 6 |   COMMAND_PRIORITY_CRITICAL,
 7 |   SELECTION_CHANGE_COMMAND,
 8 | } from "lexical"
 9 | 
10 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
11 | 
12 | export function useUpdateToolbarHandler(
13 |   callback: (selection: BaseSelection) => void
14 | ) {
15 |   const [editor] = useLexicalComposerContext()
16 |   const { activeEditor } = useToolbarContext()
17 | 
18 |   useEffect(() => {
19 |     return activeEditor.registerCommand(
20 |       SELECTION_CHANGE_COMMAND,
21 |       () => {
22 |         const selection = $getSelection()
23 |         if (selection) {
24 |           callback(selection)
25 |         }
26 |         return false
27 |       },
28 |       COMMAND_PRIORITY_CRITICAL
29 |     )
30 |   }, [editor, callback])
31 | 
32 |   useEffect(() => {
33 |     activeEditor.getEditorState().read(() => {
34 |       const selection = $getSelection()
35 |       if (selection) {
36 |         callback(selection)
37 |       }
38 |     })
39 |   }, [activeEditor, callback])
40 | }
41 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/editor-ui/content-editable.tsx:
--------------------------------------------------------------------------------
 1 | import { JSX } from "react"
 2 | import { ContentEditable as LexicalContentEditable } from "@lexical/react/LexicalContentEditable"
 3 | 
 4 | type Props = {
 5 |   placeholder: string
 6 |   className?: string
 7 |   placeholderClassName?: string
 8 | }
 9 | 
10 | export function ContentEditable({
11 |   placeholder,
12 |   className,
13 |   placeholderClassName,
14 | }: Props): JSX.Element {
15 |   return (
16 |     <LexicalContentEditable
17 |       className={
18 |         className ??
19 |         `ContentEditable__root relative block min-h-72 min-h-full overflow-auto px-8 py-4 focus:outline-none`
20 |       }
21 |       aria-placeholder={placeholder}
22 |       placeholder={
23 |         <div
24 |           className={
25 |             placeholderClassName ??
26 |             `text-muted-foreground pointer-events-none absolute top-0 left-0 overflow-hidden px-8 py-[18px] text-ellipsis select-none`
27 |           }
28 |         >
29 |           {placeholder}
30 |         </div>
31 |       }
32 |     />
33 |   )
34 | }
35 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/editor-ui/katex-renderer.tsx:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | import * as React from "react"
 9 | import { JSX, useEffect, useRef } from "react"
10 | import katex from "katex"
11 | 
12 | export default function KatexRenderer({
13 |   equation,
14 |   inline,
15 |   onDoubleClick,
16 | }: Readonly<{
17 |   equation: string
18 |   inline: boolean
19 |   onDoubleClick: () => void
20 | }>): JSX.Element {
21 |   const katexElementRef = useRef(null)
22 | 
23 |   useEffect(() => {
24 |     const katexElement = katexElementRef.current
25 | 
26 |     if (katexElement !== null) {
27 |       katex.render(equation, katexElement, {
28 |         displayMode: !inline, // true === block display //
29 |         errorColor: "#cc0000",
30 |         output: "html",
31 |         strict: "warn",
32 |         throwOnError: false,
33 |         trust: false,
34 |       })
35 |     }
36 |   }, [equation, inline])
37 | 
38 |   return (
39 |     // We use an empty image tag either side to ensure Android doesn't try and compose from the
40 |     // inner text from Katex. There didn't seem to be any other way of making this work,
41 |     // without having a physical space.
42 |     <>
43 |       <img src="#" alt="" />
44 |       <span
45 |         role="button"
46 |         tabIndex={-1}
47 |         onDoubleClick={onDoubleClick}
48 |         ref={katexElementRef}
49 |       />
50 |       <img src="#" alt="" />
51 |     </>
52 |   )
53 | }
54 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/actions/actions-plugin.tsx:
--------------------------------------------------------------------------------
1 | export function ActionsPlugin({ children }: { children: React.ReactNode }) {
2 |   return children
3 | }
4 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/actions/character-limit-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { CharacterLimitPlugin as LexicalCharacterLimitPlugin } from "@lexical/react/LexicalCharacterLimitPlugin"
 2 | 
 3 | export function CharacterLimitPlugin({
 4 |   maxLength,
 5 |   charset,
 6 | }: {
 7 |   maxLength: number
 8 |   charset: "UTF-8" | "UTF-16"
 9 | }) {
10 |   return (
11 |     <LexicalCharacterLimitPlugin
12 |       maxLength={maxLength}
13 |       charset={charset}
14 |       renderer={(number) => (
15 |         <div
16 |           className={`px-1 text-xs ${number.remainingCharacters <= 0 ? "text-destructive" : "text-gray-500"}`}
17 |         >
18 |           {number.remainingCharacters}
19 |         </div>
20 |       )}
21 |     />
22 |   )
23 | }
24 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/actions/edit-mode-toggle-plugin.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { useState } from "react"
 4 | import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
 5 | import { LockIcon, UnlockIcon } from "lucide-react"
 6 | 
 7 | import { Button } from "@/registry/new-york-v4/ui/button"
 8 | import {
 9 |   Tooltip,
10 |   TooltipContent,
11 |   TooltipTrigger,
12 | } from "@/registry/new-york-v4/ui/tooltip"
13 | 
14 | export function EditModeTogglePlugin() {
15 |   const [editor] = useLexicalComposerContext()
16 |   const [isEditable, setIsEditable] = useState(() => editor.isEditable())
17 | 
18 |   return (
19 |     <Tooltip>
20 |       <TooltipTrigger asChild>
21 |         <Button
22 |           variant={"ghost"}
23 |           onClick={() => {
24 |             editor.setEditable(!editor.isEditable())
25 |             setIsEditable(editor.isEditable())
26 |           }}
27 |           title="Read-Only Mode"
28 |           aria-label={`${!isEditable ? "Unlock" : "Lock"} read-only mode`}
29 |           size={"sm"}
30 |           className="p-2"
31 |         >
32 |           {isEditable ? (
33 |             <LockIcon className="size-4" />
34 |           ) : (
35 |             <UnlockIcon className="size-4" />
36 |           )}
37 |         </Button>
38 |       </TooltipTrigger>
39 |       <TooltipContent>
40 |         {isEditable ? "View Only Mode" : "Edit Mode"}
41 |       </TooltipContent>
42 |     </Tooltip>
43 |   )
44 | }
45 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/auto-link-plugin.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | /**
 4 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 5 |  *
 6 |  * This source code is licensed under the MIT license found in the
 7 |  * LICENSE file in the root directory of this source tree.
 8 |  *
 9 |  */
10 | import * as React from "react"
11 | import { JSX } from "react"
12 | import {
13 |   createLinkMatcherWithRegExp,
14 |   AutoLinkPlugin as LexicalAutoLinkPlugin,
15 | } from "@lexical/react/LexicalAutoLinkPlugin"
16 | 
17 | const URL_REGEX =
18 |   /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)(?<![-.+():%])/
19 | 
20 | const EMAIL_REGEX =
21 |   /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
22 | 
23 | const MATCHERS = [
24 |   createLinkMatcherWithRegExp(URL_REGEX, (text) => {
25 |     return text.startsWith("http") ? text : `https://${text}`
26 |   }),
27 |   createLinkMatcherWithRegExp(EMAIL_REGEX, (text) => {
28 |     return `mailto:${text}`
29 |   }),
30 | ]
31 | 
32 | export function AutoLinkPlugin(): JSX.Element {
33 |   return <LexicalAutoLinkPlugin matchers={MATCHERS} />
34 | }
35 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/code-highlight-plugin.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | /**
 4 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 5 |  *
 6 |  * This source code is licensed under the MIT license found in the
 7 |  * LICENSE file in the root directory of this source tree.
 8 |  *
 9 |  */
10 | import { JSX, useEffect } from "react"
11 | import { registerCodeHighlighting } from "@lexical/code"
12 | import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
13 | 
14 | export function CodeHighlightPlugin(): JSX.Element | null {
15 |   const [editor] = useLexicalComposerContext()
16 | 
17 |   useEffect(() => {
18 |     return registerCodeHighlighting(editor)
19 |   }, [editor])
20 | 
21 |   return null
22 | }
23 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/default/lexical-context-menu-plugin.tsx:
--------------------------------------------------------------------------------
1 | import { LexicalContextMenuPlugin } from "@lexical/react/LexicalContextMenuPlugin"
2 | 
3 | export default LexicalContextMenuPlugin
4 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/default/lexical-typeahead-menu-plugin.ts:
--------------------------------------------------------------------------------
1 | import { LexicalTypeaheadMenuPlugin } from "@lexical/react/LexicalTypeaheadMenuPlugin"
2 | 
3 | export default LexicalTypeaheadMenuPlugin
4 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/embeds/figma-plugin.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | /**
 4 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 5 |  *
 6 |  * This source code is licensed under the MIT license found in the
 7 |  * LICENSE file in the root directory of this source tree.
 8 |  *
 9 |  */
10 | import { JSX, useEffect } from "react"
11 | import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
12 | import { $insertNodeToNearestRoot } from "@lexical/utils"
13 | import { COMMAND_PRIORITY_EDITOR, createCommand, LexicalCommand } from "lexical"
14 | 
15 | import {
16 |   $createFigmaNode,
17 |   FigmaNode,
18 | } from "@/registry/new-york-v4/editor/nodes/embeds/figma-node"
19 | 
20 | export const INSERT_FIGMA_COMMAND: LexicalCommand<string> = createCommand(
21 |   "INSERT_FIGMA_COMMAND"
22 | )
23 | 
24 | export function FigmaPlugin(): JSX.Element | null {
25 |   const [editor] = useLexicalComposerContext()
26 | 
27 |   useEffect(() => {
28 |     if (!editor.hasNodes([FigmaNode])) {
29 |       throw new Error("FigmaPlugin: FigmaNode not registered on editor")
30 |     }
31 | 
32 |     return editor.registerCommand<string>(
33 |       INSERT_FIGMA_COMMAND,
34 |       (payload) => {
35 |         const figmaNode = $createFigmaNode(payload)
36 |         $insertNodeToNearestRoot(figmaNode)
37 |         return true
38 |       },
39 |       COMMAND_PRIORITY_EDITOR
40 |     )
41 |   }, [editor])
42 | 
43 |   return null
44 | }
45 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/embeds/twitter-plugin.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | /**
 4 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 5 |  *
 6 |  * This source code is licensed under the MIT license found in the
 7 |  * LICENSE file in the root directory of this source tree.
 8 |  *
 9 |  */
10 | import { JSX, useEffect } from "react"
11 | import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
12 | import { $insertNodeToNearestRoot } from "@lexical/utils"
13 | import { COMMAND_PRIORITY_EDITOR, createCommand, LexicalCommand } from "lexical"
14 | 
15 | import {
16 |   $createTweetNode,
17 |   TweetNode,
18 | } from "@/registry/new-york-v4/editor/nodes/embeds/tweet-node"
19 | 
20 | export const INSERT_TWEET_COMMAND: LexicalCommand<string> = createCommand(
21 |   "INSERT_TWEET_COMMAND"
22 | )
23 | 
24 | export function TwitterPlugin(): JSX.Element | null {
25 |   const [editor] = useLexicalComposerContext()
26 | 
27 |   useEffect(() => {
28 |     if (!editor.hasNodes([TweetNode])) {
29 |       throw new Error("TwitterPlugin: TweetNode not registered on editor")
30 |     }
31 | 
32 |     return editor.registerCommand<string>(
33 |       INSERT_TWEET_COMMAND,
34 |       (payload) => {
35 |         const tweetNode = $createTweetNode(payload)
36 |         $insertNodeToNearestRoot(tweetNode)
37 | 
38 |         return true
39 |       },
40 |       COMMAND_PRIORITY_EDITOR
41 |     )
42 |   }, [editor])
43 | 
44 |   return null
45 | }
46 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/embeds/youtube-plugin.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | /**
 4 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 5 |  *
 6 |  * This source code is licensed under the MIT license found in the
 7 |  * LICENSE file in the root directory of this source tree.
 8 |  *
 9 |  */
10 | import { JSX, useEffect } from "react"
11 | import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
12 | import { $insertNodeToNearestRoot } from "@lexical/utils"
13 | import { COMMAND_PRIORITY_EDITOR, createCommand, LexicalCommand } from "lexical"
14 | 
15 | import {
16 |   $createYouTubeNode,
17 |   YouTubeNode,
18 | } from "@/registry/new-york-v4/editor/nodes/embeds/youtube-node"
19 | 
20 | export const INSERT_YOUTUBE_COMMAND: LexicalCommand<string> = createCommand(
21 |   "INSERT_YOUTUBE_COMMAND"
22 | )
23 | 
24 | export function YouTubePlugin(): JSX.Element | null {
25 |   const [editor] = useLexicalComposerContext()
26 | 
27 |   useEffect(() => {
28 |     if (!editor.hasNodes([YouTubeNode])) {
29 |       throw new Error("YouTubePlugin: YouTubeNode not registered on editor")
30 |     }
31 | 
32 |     return editor.registerCommand<string>(
33 |       INSERT_YOUTUBE_COMMAND,
34 |       (payload) => {
35 |         const youTubeNode = $createYouTubeNode(payload)
36 |         $insertNodeToNearestRoot(youTubeNode)
37 | 
38 |         return true
39 |       },
40 |       COMMAND_PRIORITY_EDITOR
41 |     )
42 |   }, [editor])
43 | 
44 |   return null
45 | }
46 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/link-plugin.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | /**
 4 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 5 |  *
 6 |  * This source code is licensed under the MIT license found in the
 7 |  * LICENSE file in the root directory of this source tree.
 8 |  *
 9 |  */
10 | import * as React from "react"
11 | import { JSX } from "react"
12 | import { LinkPlugin as LexicalLinkPlugin } from "@lexical/react/LexicalLinkPlugin"
13 | 
14 | import { validateUrl } from "@/registry/new-york-v4/editor/utils/url"
15 | 
16 | export function LinkPlugin(): JSX.Element {
17 |   return <LexicalLinkPlugin validateUrl={validateUrl} />
18 | }
19 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/alignment-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { FORMAT_ELEMENT_COMMAND } from "lexical"
 2 | import {
 3 |   AlignCenterIcon,
 4 |   AlignJustifyIcon,
 5 |   AlignLeftIcon,
 6 |   AlignRightIcon,
 7 | } from "lucide-react"
 8 | 
 9 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
10 | 
11 | export function AlignmentPickerPlugin({
12 |   alignment,
13 | }: {
14 |   alignment: "left" | "center" | "right" | "justify"
15 | }) {
16 |   return new ComponentPickerOption(`Align ${alignment}`, {
17 |     icon: <AlignIcons alignment={alignment} />,
18 |     keywords: ["align", "justify", alignment],
19 |     onSelect: (_, editor) =>
20 |       editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, alignment),
21 |   })
22 | }
23 | 
24 | function AlignIcons({
25 |   alignment,
26 | }: {
27 |   alignment: "left" | "center" | "right" | "justify"
28 | }) {
29 |   switch (alignment) {
30 |     case "left":
31 |       return <AlignLeftIcon className="size-4" />
32 |     case "center":
33 |       return <AlignCenterIcon className="size-4" />
34 |     case "right":
35 |       return <AlignRightIcon className="size-4" />
36 |     case "justify":
37 |       return <AlignJustifyIcon className="size-4" />
38 |   }
39 | }
40 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/bulleted-list-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { INSERT_UNORDERED_LIST_COMMAND } from "@lexical/list"
 2 | import { ListIcon } from "lucide-react"
 3 | 
 4 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 5 | 
 6 | export function BulletedListPickerPlugin() {
 7 |   return new ComponentPickerOption("Bulleted List", {
 8 |     icon: <ListIcon className="size-4" />,
 9 |     keywords: ["bulleted list", "unordered list", "ul"],
10 |     onSelect: (_, editor) =>
11 |       editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined),
12 |   })
13 | }
14 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/check-list-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { INSERT_CHECK_LIST_COMMAND } from "@lexical/list"
 2 | import { ListTodoIcon } from "lucide-react"
 3 | 
 4 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 5 | 
 6 | export function CheckListPickerPlugin() {
 7 |   return new ComponentPickerOption("Check List", {
 8 |     icon: <ListTodoIcon className="size-4" />,
 9 |     keywords: ["check list", "todo list"],
10 |     onSelect: (_, editor) =>
11 |       editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined),
12 |   })
13 | }
14 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/code-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { $createCodeNode } from "@lexical/code"
 2 | import { $setBlocksType } from "@lexical/selection"
 3 | import { $getSelection, $isRangeSelection } from "lexical"
 4 | import { CodeIcon } from "lucide-react"
 5 | 
 6 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 7 | 
 8 | export function CodePickerPlugin() {
 9 |   return new ComponentPickerOption("Code", {
10 |     icon: <CodeIcon className="size-4" />,
11 |     keywords: ["javascript", "python", "js", "codeblock"],
12 |     onSelect: (_, editor) =>
13 |       editor.update(() => {
14 |         const selection = $getSelection()
15 | 
16 |         if ($isRangeSelection(selection)) {
17 |           if (selection.isCollapsed()) {
18 |             $setBlocksType(selection, () => $createCodeNode())
19 |           } else {
20 |             // Will this ever happen?
21 |             const textContent = selection.getTextContent()
22 |             const codeNode = $createCodeNode()
23 |             selection.insertNodes([codeNode])
24 |             selection.insertRawText(textContent)
25 |           }
26 |         }
27 |       }),
28 |   })
29 | }
30 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/collapsible-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { ListCollapseIcon } from "lucide-react"
 2 | 
 3 | import { INSERT_COLLAPSIBLE_COMMAND } from "@/registry/new-york-v4/editor/plugins/collapsible-plugin"
 4 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 5 | 
 6 | export function CollapsiblePickerPlugin() {
 7 |   return new ComponentPickerOption("Collapsible", {
 8 |     icon: <ListCollapseIcon className="size-4" />,
 9 |     keywords: ["collapse", "collapsible", "toggle"],
10 |     onSelect: (_, editor) =>
11 |       editor.dispatchCommand(INSERT_COLLAPSIBLE_COMMAND, undefined),
12 |   })
13 | }
14 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/columns-layout-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { Columns3Icon } from "lucide-react"
 2 | 
 3 | import { InsertLayoutDialog } from "@/registry/new-york-v4/editor/plugins/layout-plugin"
 4 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 5 | 
 6 | export function ColumnsLayoutPickerPlugin() {
 7 |   return new ComponentPickerOption("Columns Layout", {
 8 |     icon: <Columns3Icon className="size-4" />,
 9 |     keywords: ["columns", "layout", "grid"],
10 |     onSelect: (_, editor, showModal) =>
11 |       showModal("Insert Columns Layout", (onClose) => (
12 |         <InsertLayoutDialog activeEditor={editor} onClose={onClose} />
13 |       )),
14 |   })
15 | }
16 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/component-picker-option.tsx:
--------------------------------------------------------------------------------
 1 | import { JSX } from "react"
 2 | import { MenuOption } from "@lexical/react/LexicalTypeaheadMenuPlugin"
 3 | import { LexicalEditor } from "lexical"
 4 | 
 5 | export class ComponentPickerOption extends MenuOption {
 6 |   // What shows up in the editor
 7 |   title: string
 8 |   // Icon for display
 9 |   icon?: JSX.Element
10 |   // For extra searching.
11 |   keywords: Array<string>
12 |   // TBD
13 |   keyboardShortcut?: string
14 |   // What happens when you select this option?
15 |   onSelect: (
16 |     queryString: string,
17 |     editor: LexicalEditor,
18 |     showModal: (
19 |       title: string,
20 |       showModal: (onClose: () => void) => JSX.Element
21 |     ) => void
22 |   ) => void
23 | 
24 |   constructor(
25 |     title: string,
26 |     options: {
27 |       icon?: JSX.Element
28 |       keywords?: Array<string>
29 |       keyboardShortcut?: string
30 |       onSelect: (
31 |         queryString: string,
32 |         editor: LexicalEditor,
33 |         showModal: (
34 |           title: string,
35 |           showModal: (onClose: () => void) => JSX.Element
36 |         ) => void
37 |       ) => void
38 |     }
39 |   ) {
40 |     super(title)
41 |     this.title = title
42 |     this.keywords = options.keywords || []
43 |     this.icon = options.icon
44 |     this.keyboardShortcut = options.keyboardShortcut
45 |     this.onSelect = options.onSelect.bind(this)
46 |   }
47 | }
48 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/divider-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode"
 2 | import { MinusIcon } from "lucide-react"
 3 | 
 4 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 5 | 
 6 | export function DividerPickerPlugin() {
 7 |   return new ComponentPickerOption("Divider", {
 8 |     icon: <MinusIcon className="size-4" />,
 9 |     keywords: ["horizontal rule", "divider", "hr"],
10 |     onSelect: (_, editor) =>
11 |       editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined),
12 |   })
13 | }
14 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/embeds-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { INSERT_EMBED_COMMAND } from "@lexical/react/LexicalAutoEmbedPlugin"
 2 | 
 3 | import {
 4 |   CustomEmbedConfig,
 5 |   EmbedConfigs,
 6 | } from "@/registry/new-york-v4/editor/plugins/embeds/auto-embed-plugin"
 7 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 8 | 
 9 | export function EmbedsPickerPlugin({
10 |   embed,
11 | }: {
12 |   embed: "figma" | "tweet" | "youtube-video"
13 | }) {
14 |   const embedConfig = EmbedConfigs.find(
15 |     (config) => config.type === embed
16 |   ) as CustomEmbedConfig
17 | 
18 |   return new ComponentPickerOption(`Embed ${embedConfig.contentName}`, {
19 |     icon: embedConfig.icon,
20 |     keywords: [...embedConfig.keywords, "embed"],
21 |     onSelect: (_, editor) =>
22 |       editor.dispatchCommand(INSERT_EMBED_COMMAND, embedConfig.type),
23 |   })
24 | }
25 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/equation-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { DiffIcon } from "lucide-react"
 2 | 
 3 | import { InsertEquationDialog } from "@/registry/new-york-v4/editor/plugins/equations-plugin"
 4 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 5 | 
 6 | export function EquationPickerPlugin() {
 7 |   return new ComponentPickerOption("Equation", {
 8 |     icon: <DiffIcon className="size-4" />,
 9 |     keywords: ["equation", "latex", "math"],
10 |     onSelect: (_, editor, showModal) =>
11 |       showModal("Insert Equation", (onClose) => (
12 |         <InsertEquationDialog activeEditor={editor} onClose={onClose} />
13 |       )),
14 |   })
15 | }
16 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/excalidraw-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { FrameIcon } from "lucide-react"
 2 | 
 3 | import { INSERT_EXCALIDRAW_COMMAND } from "@/registry/new-york-v4/editor/plugins/excalidraw-plugin"
 4 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 5 | 
 6 | export function ExcalidrawPickerPlugin() {
 7 |   return new ComponentPickerOption("Excalidraw", {
 8 |     icon: <FrameIcon className="size-4" />,
 9 |     keywords: ["excalidraw", "diagram", "drawing"],
10 |     onSelect: (_, editor) =>
11 |       editor.dispatchCommand(INSERT_EXCALIDRAW_COMMAND, undefined),
12 |   })
13 | }
14 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/heading-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { $createHeadingNode } from "@lexical/rich-text"
 2 | import { $setBlocksType } from "@lexical/selection"
 3 | import { $getSelection, $isRangeSelection } from "lexical"
 4 | import { Heading1Icon, Heading2Icon, Heading3Icon } from "lucide-react"
 5 | 
 6 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 7 | 
 8 | export function HeadingPickerPlugin({ n }: { n: 1 | 2 | 3 }) {
 9 |   return new ComponentPickerOption(`Heading ${n}`, {
10 |     icon: <HeadingIcons n={n} />,
11 |     keywords: ["heading", "header", `h${n}`],
12 |     onSelect: (_, editor) =>
13 |       editor.update(() => {
14 |         const selection = $getSelection()
15 |         if ($isRangeSelection(selection)) {
16 |           $setBlocksType(selection, () => $createHeadingNode(`h${n}`))
17 |         }
18 |       }),
19 |   })
20 | }
21 | 
22 | function HeadingIcons({ n }: { n: number }) {
23 |   switch (n) {
24 |     case 1:
25 |       return <Heading1Icon className="size-4" />
26 |     case 2:
27 |       return <Heading2Icon className="size-4" />
28 |     case 3:
29 |       return <Heading3Icon className="size-4" />
30 |   }
31 | }
32 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/image-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { ImageIcon } from "lucide-react"
 2 | 
 3 | import { InsertImageDialog } from "@/registry/new-york-v4/editor/plugins/images-plugin"
 4 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 5 | 
 6 | export function ImagePickerPlugin() {
 7 |   return new ComponentPickerOption("Image", {
 8 |     icon: <ImageIcon className="size-4" />,
 9 |     keywords: ["image", "photo", "picture", "file"],
10 |     onSelect: (_, editor, showModal) =>
11 |       showModal("Insert Image", (onClose) => (
12 |         <InsertImageDialog activeEditor={editor} onClose={onClose} />
13 |       )),
14 |   })
15 | }
16 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/numbered-list-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { INSERT_ORDERED_LIST_COMMAND } from "@lexical/list"
 2 | import { ListOrderedIcon } from "lucide-react"
 3 | 
 4 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 5 | 
 6 | export function NumberedListPickerPlugin() {
 7 |   return new ComponentPickerOption("Numbered List", {
 8 |     icon: <ListOrderedIcon className="size-4" />,
 9 |     keywords: ["numbered list", "ordered list", "ol"],
10 |     onSelect: (_, editor) =>
11 |       editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined),
12 |   })
13 | }
14 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/page-break-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { ScissorsIcon } from "lucide-react"
 2 | 
 3 | import { INSERT_PAGE_BREAK } from "@/registry/new-york-v4/editor/plugins/page-break-plugin"
 4 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 5 | 
 6 | export function PageBreakPickerPlugin() {
 7 |   return new ComponentPickerOption("Page Break", {
 8 |     icon: <ScissorsIcon className="size-4" />,
 9 |     keywords: ["page break", "divider"],
10 |     onSelect: (_, editor) =>
11 |       editor.dispatchCommand(INSERT_PAGE_BREAK, undefined),
12 |   })
13 | }
14 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/paragraph-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { $setBlocksType } from "@lexical/selection"
 2 | import { $createParagraphNode, $getSelection, $isRangeSelection } from "lexical"
 3 | import { TextIcon } from "lucide-react"
 4 | 
 5 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 6 | 
 7 | export function ParagraphPickerPlugin() {
 8 |   return new ComponentPickerOption("Paragraph", {
 9 |     icon: <TextIcon className="size-4" />,
10 |     keywords: ["normal", "paragraph", "p", "text"],
11 |     onSelect: (_, editor) =>
12 |       editor.update(() => {
13 |         const selection = $getSelection()
14 |         if ($isRangeSelection(selection)) {
15 |           $setBlocksType(selection, () => $createParagraphNode())
16 |         }
17 |       }),
18 |   })
19 | }
20 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/poll-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { ListChecksIcon } from "lucide-react"
 2 | 
 3 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 4 | import { InsertPollDialog } from "@/registry/new-york-v4/editor/plugins/poll-plugin"
 5 | 
 6 | export function PollPickerPlugin() {
 7 |   return new ComponentPickerOption("Poll", {
 8 |     icon: <ListChecksIcon className="size-4" />,
 9 |     keywords: ["poll", "vote"],
10 |     onSelect: (_, editor, showModal) =>
11 |       showModal("Insert Poll", (onClose) => (
12 |         <InsertPollDialog activeEditor={editor} onClose={onClose} />
13 |       )),
14 |   })
15 | }
16 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/picker/quote-picker-plugin.tsx:
--------------------------------------------------------------------------------
 1 | import { $createQuoteNode } from "@lexical/rich-text"
 2 | import { $setBlocksType } from "@lexical/selection"
 3 | import { $getSelection, $isRangeSelection } from "lexical"
 4 | import { QuoteIcon } from "lucide-react"
 5 | 
 6 | import { ComponentPickerOption } from "@/registry/new-york-v4/editor/plugins/picker/component-picker-option"
 7 | 
 8 | export function QuotePickerPlugin() {
 9 |   return new ComponentPickerOption("Quote", {
10 |     icon: <QuoteIcon className="size-4" />,
11 |     keywords: ["block quote"],
12 |     onSelect: (_, editor) =>
13 |       editor.update(() => {
14 |         const selection = $getSelection()
15 |         if ($isRangeSelection(selection)) {
16 |           $setBlocksType(selection, () => $createQuoteNode())
17 |         }
18 |       }),
19 |   })
20 | }
21 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-format/block-format-data.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   CodeIcon,
 3 |   Heading1Icon,
 4 |   Heading2Icon,
 5 |   Heading3Icon,
 6 |   ListIcon,
 7 |   ListOrderedIcon,
 8 |   ListTodoIcon,
 9 |   QuoteIcon,
10 |   TextIcon,
11 | } from "lucide-react"
12 | 
13 | export const blockTypeToBlockName: Record<
14 |   string,
15 |   { label: string; icon: React.ReactNode }
16 | > = {
17 |   paragraph: {
18 |     label: "Paragraph",
19 |     icon: <TextIcon className="size-4" />,
20 |   },
21 |   h1: {
22 |     label: "Heading 1",
23 |     icon: <Heading1Icon className="size-4" />,
24 |   },
25 |   h2: {
26 |     label: "Heading 2",
27 |     icon: <Heading2Icon className="size-4" />,
28 |   },
29 |   h3: {
30 |     label: "Heading 3",
31 |     icon: <Heading3Icon className="size-4" />,
32 |   },
33 |   number: {
34 |     label: "Numbered List",
35 |     icon: <ListOrderedIcon className="size-4" />,
36 |   },
37 |   bullet: {
38 |     label: "Bulleted List",
39 |     icon: <ListIcon className="size-4" />,
40 |   },
41 |   check: {
42 |     label: "Check List",
43 |     icon: <ListTodoIcon className="size-4" />,
44 |   },
45 |   code: {
46 |     label: "Code Block",
47 |     icon: <CodeIcon className="size-4" />,
48 |   },
49 |   quote: {
50 |     label: "Quote",
51 |     icon: <QuoteIcon className="size-4" />,
52 |   },
53 | }
54 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-format/format-bulleted-list.tsx:
--------------------------------------------------------------------------------
 1 | import { INSERT_UNORDERED_LIST_COMMAND } from "@lexical/list"
 2 | import { $setBlocksType } from "@lexical/selection"
 3 | import { $createParagraphNode, $getSelection, $isRangeSelection } from "lexical"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { blockTypeToBlockName } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/block-format-data"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | const BLOCK_FORMAT_VALUE = "bullet"
10 | 
11 | export function FormatBulletedList() {
12 |   const { activeEditor, blockType } = useToolbarContext()
13 | 
14 |   const formatParagraph = () => {
15 |     activeEditor.update(() => {
16 |       const selection = $getSelection()
17 |       if ($isRangeSelection(selection)) {
18 |         $setBlocksType(selection, () => $createParagraphNode())
19 |       }
20 |     })
21 |   }
22 | 
23 |   const formatBulletedList = () => {
24 |     if (blockType !== "bullet") {
25 |       activeEditor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
26 |     } else {
27 |       formatParagraph()
28 |     }
29 |   }
30 | 
31 |   return (
32 |     <SelectItem value={BLOCK_FORMAT_VALUE} onPointerDown={formatBulletedList}>
33 |       <div className="flex items-center gap-1 font-normal">
34 |         {blockTypeToBlockName[BLOCK_FORMAT_VALUE].icon}
35 |         {blockTypeToBlockName[BLOCK_FORMAT_VALUE].label}
36 |       </div>
37 |     </SelectItem>
38 |   )
39 | }
40 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-format/format-check-list.tsx:
--------------------------------------------------------------------------------
 1 | import { INSERT_CHECK_LIST_COMMAND } from "@lexical/list"
 2 | import { $setBlocksType } from "@lexical/selection"
 3 | import { $createParagraphNode, $getSelection, $isRangeSelection } from "lexical"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { blockTypeToBlockName } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/block-format-data"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | const BLOCK_FORMAT_VALUE = "check"
10 | 
11 | export function FormatCheckList() {
12 |   const { activeEditor, blockType } = useToolbarContext()
13 | 
14 |   const formatParagraph = () => {
15 |     activeEditor.update(() => {
16 |       const selection = $getSelection()
17 |       if ($isRangeSelection(selection)) {
18 |         $setBlocksType(selection, () => $createParagraphNode())
19 |       }
20 |     })
21 |   }
22 | 
23 |   const formatCheckList = () => {
24 |     if (blockType !== "number") {
25 |       activeEditor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined)
26 |     } else {
27 |       formatParagraph()
28 |     }
29 |   }
30 | 
31 |   return (
32 |     <SelectItem value={BLOCK_FORMAT_VALUE} onPointerDown={formatCheckList}>
33 |       <div className="flex items-center gap-1 font-normal">
34 |         {blockTypeToBlockName[BLOCK_FORMAT_VALUE].icon}
35 |         {blockTypeToBlockName[BLOCK_FORMAT_VALUE].label}
36 |       </div>
37 |     </SelectItem>
38 |   )
39 | }
40 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-format/format-heading.tsx:
--------------------------------------------------------------------------------
 1 | import { $createHeadingNode, HeadingTagType } from "@lexical/rich-text"
 2 | import { $setBlocksType } from "@lexical/selection"
 3 | import { $getSelection } from "lexical"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { blockTypeToBlockName } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/block-format-data"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | export function FormatHeading({ levels = [] }: { levels: HeadingTagType[] }) {
10 |   const { activeEditor, blockType } = useToolbarContext()
11 | 
12 |   const formatHeading = (headingSize: HeadingTagType) => {
13 |     if (blockType !== headingSize) {
14 |       activeEditor.update(() => {
15 |         const selection = $getSelection()
16 |         $setBlocksType(selection, () => $createHeadingNode(headingSize))
17 |       })
18 |     }
19 |   }
20 | 
21 |   return levels.map((level) => (
22 |     <SelectItem
23 |       key={level}
24 |       value={level}
25 |       onPointerDown={() => formatHeading(level)}
26 |     >
27 |       <div className="flex items-center gap-1 font-normal">
28 |         {blockTypeToBlockName[level].icon}
29 |         {blockTypeToBlockName[level].label}
30 |       </div>
31 |     </SelectItem>
32 |   ))
33 | }
34 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-format/format-numbered-list.tsx:
--------------------------------------------------------------------------------
 1 | import { INSERT_ORDERED_LIST_COMMAND } from "@lexical/list"
 2 | import { $setBlocksType } from "@lexical/selection"
 3 | import { $createParagraphNode, $getSelection, $isRangeSelection } from "lexical"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { blockTypeToBlockName } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/block-format-data"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | const BLOCK_FORMAT_VALUE = "number"
10 | 
11 | export function FormatNumberedList() {
12 |   const { activeEditor, blockType } = useToolbarContext()
13 | 
14 |   const formatParagraph = () => {
15 |     activeEditor.update(() => {
16 |       const selection = $getSelection()
17 |       if ($isRangeSelection(selection)) {
18 |         $setBlocksType(selection, () => $createParagraphNode())
19 |       }
20 |     })
21 |   }
22 | 
23 |   const formatNumberedList = () => {
24 |     if (blockType !== "number") {
25 |       activeEditor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
26 |     } else {
27 |       formatParagraph()
28 |     }
29 |   }
30 | 
31 |   return (
32 |     <SelectItem value={BLOCK_FORMAT_VALUE} onPointerDown={formatNumberedList}>
33 |       <div className="flex items-center gap-1 font-normal">
34 |         {blockTypeToBlockName[BLOCK_FORMAT_VALUE].icon}
35 |         {blockTypeToBlockName[BLOCK_FORMAT_VALUE].label}
36 |       </div>
37 |     </SelectItem>
38 |   )
39 | }
40 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-format/format-paragraph.tsx:
--------------------------------------------------------------------------------
 1 | import { $setBlocksType } from "@lexical/selection"
 2 | import { $createParagraphNode, $getSelection, $isRangeSelection } from "lexical"
 3 | 
 4 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 5 | import { blockTypeToBlockName } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/block-format-data"
 6 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 7 | 
 8 | const BLOCK_FORMAT_VALUE = "paragraph"
 9 | 
10 | export function FormatParagraph() {
11 |   const { activeEditor } = useToolbarContext()
12 | 
13 |   const formatParagraph = () => {
14 |     activeEditor.update(() => {
15 |       const selection = $getSelection()
16 |       if ($isRangeSelection(selection)) {
17 |         $setBlocksType(selection, () => $createParagraphNode())
18 |       }
19 |     })
20 |   }
21 | 
22 |   return (
23 |     <SelectItem value={BLOCK_FORMAT_VALUE} onPointerDown={formatParagraph}>
24 |       <div className="flex items-center gap-1 font-normal">
25 |         {blockTypeToBlockName[BLOCK_FORMAT_VALUE].icon}
26 |         {blockTypeToBlockName[BLOCK_FORMAT_VALUE].label}
27 |       </div>
28 |     </SelectItem>
29 |   )
30 | }
31 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-format/format-quote.tsx:
--------------------------------------------------------------------------------
 1 | import { $createQuoteNode } from "@lexical/rich-text"
 2 | import { $setBlocksType } from "@lexical/selection"
 3 | import { $getSelection } from "lexical"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { blockTypeToBlockName } from "@/registry/new-york-v4/editor/plugins/toolbar/block-format/block-format-data"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | const BLOCK_FORMAT_VALUE = "quote"
10 | 
11 | export function FormatQuote() {
12 |   const { activeEditor, blockType } = useToolbarContext()
13 | 
14 |   const formatQuote = () => {
15 |     if (blockType !== "quote") {
16 |       activeEditor.update(() => {
17 |         const selection = $getSelection()
18 |         $setBlocksType(selection, () => $createQuoteNode())
19 |       })
20 |     }
21 |   }
22 | 
23 |   return (
24 |     <SelectItem value="quote" onPointerDown={formatQuote}>
25 |       <div className="flex items-center gap-1 font-normal">
26 |         {blockTypeToBlockName[BLOCK_FORMAT_VALUE].icon}
27 |         {blockTypeToBlockName[BLOCK_FORMAT_VALUE].label}
28 |       </div>
29 |     </SelectItem>
30 |   )
31 | }
32 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-insert-plugin.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { PlusIcon } from "lucide-react"
 4 | 
 5 | import { useEditorModal } from "@/registry/new-york-v4/editor/editor-hooks/use-modal"
 6 | import {
 7 |   Select,
 8 |   SelectContent,
 9 |   SelectGroup,
10 |   SelectTrigger,
11 | } from "@/registry/new-york-v4/ui/select"
12 | 
13 | export function BlockInsertPlugin({ children }: { children: React.ReactNode }) {
14 |   const [modal] = useEditorModal()
15 | 
16 |   return (
17 |     <>
18 |       {modal}
19 |       <Select value={""}>
20 |         <SelectTrigger className="!h-8 w-min gap-1">
21 |           <PlusIcon className="size-4" />
22 |           <span>Insert</span>
23 |         </SelectTrigger>
24 |         <SelectContent>
25 |           <SelectGroup>{children}</SelectGroup>
26 |         </SelectContent>
27 |       </Select>
28 |     </>
29 |   )
30 | }
31 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-collapsible-container.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { ChevronRightIcon } from "lucide-react"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { INSERT_COLLAPSIBLE_COMMAND } from "@/registry/new-york-v4/editor/plugins/collapsible-plugin"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | export function InsertCollapsibleContainer() {
10 |   const { activeEditor } = useToolbarContext()
11 |   return (
12 |     <SelectItem
13 |       value="collapsible"
14 |       onPointerUp={() =>
15 |         activeEditor.dispatchCommand(INSERT_COLLAPSIBLE_COMMAND, undefined)
16 |       }
17 |       className=""
18 |     >
19 |       <div className="flex items-center gap-1">
20 |         <ChevronRightIcon className="size-4" />
21 |         <span>Collapsible container</span>
22 |       </div>
23 |     </SelectItem>
24 |   )
25 | }
26 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-columns-layout.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { Columns3Icon } from "lucide-react"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { InsertLayoutDialog } from "@/registry/new-york-v4/editor/plugins/layout-plugin"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | export function InsertColumnsLayout() {
10 |   const { activeEditor, showModal } = useToolbarContext()
11 | 
12 |   return (
13 |     <SelectItem
14 |       value="columns"
15 |       onPointerUp={() =>
16 |         showModal("Insert Columns Layout", (onClose) => (
17 |           <InsertLayoutDialog activeEditor={activeEditor} onClose={onClose} />
18 |         ))
19 |       }
20 |       className=""
21 |     >
22 |       <div className="flex items-center gap-1">
23 |         <Columns3Icon className="size-4" />
24 |         <span>Columns Layout</span>
25 |       </div>
26 |     </SelectItem>
27 |   )
28 | }
29 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-embeds.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { INSERT_EMBED_COMMAND } from "@lexical/react/LexicalAutoEmbedPlugin"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { EmbedConfigs } from "@/registry/new-york-v4/editor/plugins/embeds/auto-embed-plugin"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | export function InsertEmbeds() {
10 |   const { activeEditor } = useToolbarContext()
11 |   return EmbedConfigs.map((embedConfig) => (
12 |     <SelectItem
13 |       key={embedConfig.type}
14 |       value={embedConfig.type}
15 |       onPointerUp={() => {
16 |         activeEditor.dispatchCommand(INSERT_EMBED_COMMAND, embedConfig.type)
17 |       }}
18 |       className=""
19 |     >
20 |       <div className="flex items-center gap-1">
21 |         {embedConfig.icon}
22 |         <span>{embedConfig.contentName}</span>
23 |       </div>
24 |     </SelectItem>
25 |   ))
26 | }
27 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-equation.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { DiffIcon } from "lucide-react"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { InsertEquationDialog } from "@/registry/new-york-v4/editor/plugins/equations-plugin"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | export function InsertEquation() {
10 |   const { activeEditor, showModal } = useToolbarContext()
11 | 
12 |   return (
13 |     <SelectItem
14 |       value="equation"
15 |       onPointerUp={() =>
16 |         showModal("Insert Equation", (onClose) => (
17 |           <InsertEquationDialog activeEditor={activeEditor} onClose={onClose} />
18 |         ))
19 |       }
20 |       className=""
21 |     >
22 |       <div className="flex items-center gap-1">
23 |         <DiffIcon className="size-4" />
24 |         <span>Equation</span>
25 |       </div>
26 |     </SelectItem>
27 |   )
28 | }
29 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-excalidraw.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { FrameIcon } from "lucide-react"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { INSERT_EXCALIDRAW_COMMAND } from "@/registry/new-york-v4/editor/plugins/excalidraw-plugin"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | export function InsertExcalidraw() {
10 |   const { activeEditor } = useToolbarContext()
11 |   return (
12 |     <SelectItem
13 |       value="excalidraw"
14 |       onPointerUp={() =>
15 |         activeEditor.dispatchCommand(INSERT_EXCALIDRAW_COMMAND, undefined)
16 |       }
17 |       className=""
18 |     >
19 |       <div className="flex items-center gap-1">
20 |         <FrameIcon className="size-4" />
21 |         <span>Excalidraw</span>
22 |       </div>
23 |     </SelectItem>
24 |   )
25 | }
26 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-horizontal-rule.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode"
 4 | import { ScissorsIcon } from "lucide-react"
 5 | 
 6 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | export function InsertHorizontalRule() {
10 |   const { activeEditor } = useToolbarContext()
11 | 
12 |   return (
13 |     <SelectItem
14 |       value="horizontal-rule"
15 |       onPointerUp={() =>
16 |         activeEditor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined)
17 |       }
18 |       className=""
19 |     >
20 |       <div className="flex items-center gap-1">
21 |         <ScissorsIcon className="size-4" />
22 |         <span>Horizontal Rule</span>
23 |       </div>
24 |     </SelectItem>
25 |   )
26 | }
27 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-image.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { ImageIcon } from "lucide-react"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { InsertImageDialog } from "@/registry/new-york-v4/editor/plugins/images-plugin"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | export function InsertImage() {
10 |   const { activeEditor, showModal } = useToolbarContext()
11 | 
12 |   return (
13 |     <SelectItem
14 |       value="image"
15 |       onPointerUp={(e) => {
16 |         showModal("Insert Image", (onClose) => (
17 |           <InsertImageDialog activeEditor={activeEditor} onClose={onClose} />
18 |         ))
19 |       }}
20 |       className=""
21 |     >
22 |       <div className="flex items-center gap-1">
23 |         <ImageIcon className="size-4" />
24 |         <span>Image</span>
25 |       </div>
26 |     </SelectItem>
27 |   )
28 | }
29 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-inline-image.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { FileImageIcon } from "lucide-react"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { InsertInlineImageDialog } from "@/registry/new-york-v4/editor/plugins/inline-image-plugin"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | export function InsertInlineImage() {
10 |   const { activeEditor, showModal } = useToolbarContext()
11 | 
12 |   return (
13 |     <SelectItem
14 |       value="inline-image"
15 |       onPointerUp={() =>
16 |         showModal("Insert Inline Image", (onClose) => (
17 |           <InsertInlineImageDialog
18 |             activeEditor={activeEditor}
19 |             onClose={onClose}
20 |           />
21 |         ))
22 |       }
23 |       className=""
24 |     >
25 |       <div className="flex items-center gap-1">
26 |         <FileImageIcon className="size-4" />
27 |         <span>Inline Image</span>
28 |       </div>
29 |     </SelectItem>
30 |   )
31 | }
32 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-page-break.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { SquareSplitVerticalIcon } from "lucide-react"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { INSERT_PAGE_BREAK } from "@/registry/new-york-v4/editor/plugins/page-break-plugin"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | export function InsertPageBreak() {
10 |   const { activeEditor } = useToolbarContext()
11 | 
12 |   return (
13 |     <SelectItem
14 |       value="page-break"
15 |       onPointerUp={() =>
16 |         activeEditor.dispatchCommand(INSERT_PAGE_BREAK, undefined)
17 |       }
18 |       className=""
19 |     >
20 |       <div className="flex items-center gap-1">
21 |         <SquareSplitVerticalIcon className="size-4" />
22 |         <span>Page Break</span>
23 |       </div>
24 |     </SelectItem>
25 |   )
26 | }
27 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-poll.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { ListChecksIcon } from "lucide-react"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { InsertPollDialog } from "@/registry/new-york-v4/editor/plugins/poll-plugin"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | export function InsertPoll() {
10 |   const { activeEditor, showModal } = useToolbarContext()
11 | 
12 |   return (
13 |     <SelectItem
14 |       value="poll"
15 |       onPointerUp={() =>
16 |         showModal("Insert Poll", (onClose) => (
17 |           <InsertPollDialog activeEditor={activeEditor} onClose={onClose} />
18 |         ))
19 |       }
20 |       className=""
21 |     >
22 |       <div className="flex items-center gap-1">
23 |         <ListChecksIcon className="size-4" />
24 |         <span>Poll</span>
25 |       </div>
26 |     </SelectItem>
27 |   )
28 | }
29 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-table.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { TableIcon } from "lucide-react"
 4 | 
 5 | import { useToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 6 | import { InsertTableDialog } from "@/registry/new-york-v4/editor/plugins/table-plugin"
 7 | import { SelectItem } from "@/registry/new-york-v4/ui/select"
 8 | 
 9 | export function InsertTable() {
10 |   const { activeEditor, showModal } = useToolbarContext()
11 | 
12 |   return (
13 |     <SelectItem
14 |       value="table"
15 |       onPointerUp={() =>
16 |         showModal("Insert Table", (onClose) => (
17 |           <InsertTableDialog activeEditor={activeEditor} onClose={onClose} />
18 |         ))
19 |       }
20 |       className=""
21 |     >
22 |       <div className="flex items-center gap-1">
23 |         <TableIcon className="size-4" />
24 |         <span>Table</span>
25 |       </div>
26 |     </SelectItem>
27 |   )
28 | }
29 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/plugins/toolbar/toolbar-plugin.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { useEffect, useState } from "react"
 4 | import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
 5 | import { COMMAND_PRIORITY_CRITICAL, SELECTION_CHANGE_COMMAND } from "lexical"
 6 | 
 7 | import { ToolbarContext } from "@/registry/new-york-v4/editor/context/toolbar-context"
 8 | import { useEditorModal } from "@/registry/new-york-v4/editor/editor-hooks/use-modal"
 9 | 
10 | export function ToolbarPlugin({
11 |   children,
12 | }: {
13 |   children: (props: { blockType: string }) => React.ReactNode
14 | }) {
15 |   const [editor] = useLexicalComposerContext()
16 | 
17 |   const [activeEditor, setActiveEditor] = useState(editor)
18 |   const [blockType, setBlockType] = useState<string>("paragraph")
19 | 
20 |   const [modal, showModal] = useEditorModal()
21 | 
22 |   const $updateToolbar = () => {}
23 | 
24 |   useEffect(() => {
25 |     return activeEditor.registerCommand(
26 |       SELECTION_CHANGE_COMMAND,
27 |       (_payload, newEditor) => {
28 |         setActiveEditor(newEditor)
29 |         return false
30 |       },
31 |       COMMAND_PRIORITY_CRITICAL
32 |     )
33 |   }, [editor])
34 | 
35 |   return (
36 |     <ToolbarContext
37 |       activeEditor={activeEditor}
38 |       $updateToolbar={$updateToolbar}
39 |       blockType={blockType}
40 |       setBlockType={setBlockType}
41 |       showModal={showModal}
42 |     >
43 |       {modal}
44 | 
45 |       {children({ blockType })}
46 |     </ToolbarContext>
47 |   )
48 | }
49 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/shared/can-use-dom.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | 
 9 | export const CAN_USE_DOM: boolean =
10 |   typeof window !== "undefined" &&
11 |   typeof window.document !== "undefined" &&
12 |   typeof window.document.createElement !== "undefined"
13 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/shared/caret-from-point.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | 
 9 | export function caretFromPoint(
10 |   x: number,
11 |   y: number
12 | ): null | {
13 |   offset: number
14 |   node: Node
15 | } {
16 |   if (typeof document.caretRangeFromPoint !== "undefined") {
17 |     const range = document.caretRangeFromPoint(x, y)
18 |     if (range === null) {
19 |       return null
20 |     }
21 |     return {
22 |       node: range.startContainer,
23 |       offset: range.startOffset,
24 |     }
25 |     // @ts-ignore
26 |   } else if (document.caretPositionFromPoint !== "undefined") {
27 |     // @ts-ignore FF - no types
28 |     const range = document.caretPositionFromPoint(x, y)
29 |     if (range === null) {
30 |       return null
31 |     }
32 |     return {
33 |       node: range.offsetNode,
34 |       offset: range.offset,
35 |     }
36 |   } else {
37 |     // Gracefully handle IE
38 |     return null
39 |   }
40 | }
41 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/shared/invariant.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | 
 9 | // invariant(condition, message) will refine types based on "condition", and
10 | // if "condition" is false will throw an error. This function is special-cased
11 | // in flow itself, so we can't name it anything else.
12 | export function invariant(
13 |   cond?: boolean,
14 |   message?: string,
15 |   ...args: string[]
16 | ): asserts cond {
17 |   if (cond) {
18 |     return
19 |   }
20 | 
21 |   throw new Error(
22 |     "Internal Lexical error: invariant() is meant to be replaced at compile " +
23 |       "time. There is no runtime version. Error: " +
24 |       message
25 |   )
26 | }
27 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/shared/normalize-class-names.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | 
 9 | export default function normalizeClassNames(
10 |   ...classNames: Array<typeof undefined | boolean | null | string>
11 | ): Array<string> {
12 |   const rval = []
13 |   for (const className of classNames) {
14 |     if (className && typeof className === "string") {
15 |       for (const [s] of Array.from(className.matchAll(/\S+/g))) {
16 |         rval.push(s)
17 |       }
18 |     }
19 |   }
20 |   return rval
21 | }
22 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/shared/react-patches.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | import React from "react"
 9 | 
10 | // Webpack + React 17 fails to compile on the usage of `React.startTransition` or
11 | // `React["startTransition"]` even if it's behind a feature detection of
12 | // `"startTransition" in React`. Moving this to a constant avoids the issue :/
13 | const START_TRANSITION = "startTransition"
14 | 
15 | export function startTransition(callback: () => void) {
16 |   if (START_TRANSITION in React) {
17 |     React[START_TRANSITION](callback)
18 |   } else {
19 |     callback()
20 |   }
21 | }
22 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/shared/react-test-utils.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | import * as React from "react"
 9 | import * as ReactTestUtils from "react-dom/test-utils"
10 | 
11 | /**
12 |  * React 19 moved act from react-dom/test-utils to react
13 |  * https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-react-dom-test-utils
14 |  */
15 | export const act =
16 |   "act" in React ? (React.act as typeof ReactTestUtils.act) : ReactTestUtils.act
17 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/shared/simple-diff-with-cursor.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | 
 9 | export default function simpleDiffWithCursor(
10 |   a: string,
11 |   b: string,
12 |   cursor: number
13 | ): { index: number; insert: string; remove: number } {
14 |   const aLength = a.length
15 |   const bLength = b.length
16 |   let left = 0 // number of same characters counting from left
17 |   let right = 0 // number of same characters counting from right
18 |   // Iterate left to the right until we find a changed character
19 |   // First iteration considers the current cursor position
20 |   while (
21 |     left < aLength &&
22 |     left < bLength &&
23 |     a[left] === b[left] &&
24 |     left < cursor
25 |   ) {
26 |     left++
27 |   }
28 |   // Iterate right to the left until we find a changed character
29 |   while (
30 |     right + left < aLength &&
31 |     right + left < bLength &&
32 |     a[aLength - right - 1] === b[bLength - right - 1]
33 |   ) {
34 |     right++
35 |   }
36 |   // Try to iterate left further to the right without caring about the current cursor position
37 |   while (
38 |     right + left < aLength &&
39 |     right + left < bLength &&
40 |     a[left] === b[left]
41 |   ) {
42 |     left++
43 |   }
44 |   return {
45 |     index: left,
46 |     insert: b.slice(left, bLength - right),
47 |     remove: aLength - left - right,
48 |   }
49 | }
50 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/shared/use-layout-effect.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | import { useEffect, useLayoutEffect } from "react"
 9 | 
10 | import { CAN_USE_DOM } from "@/registry/new-york-v4/editor/shared/can-use-dom"
11 | 
12 | // This workaround is no longer necessary in React 19,
13 | // but we currently support React >=17.x
14 | // https://github.com/facebook/react/pull/26395
15 | const useLayoutEffectImpl: typeof useLayoutEffect = CAN_USE_DOM
16 |   ? useLayoutEffect
17 |   : useEffect
18 | 
19 | export default useLayoutEffectImpl
20 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/shared/warn-only-once.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | 
 9 | export function warnOnlyOnce(message: string) {
10 |   if (process.env.NODE_ENV === "production") {
11 |     return
12 |   }
13 |   let run = false
14 |   return () => {
15 |     if (!run) {
16 |       console.warn(message)
17 |     }
18 |     run = true
19 |   }
20 | }
21 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/transformers/markdown-emoji-transformer.ts:
--------------------------------------------------------------------------------
 1 | import { TextMatchTransformer } from "@lexical/markdown"
 2 | import { $createTextNode } from "lexical"
 3 | 
 4 | import emojiList from "@/registry/new-york-v4/editor/utils/emoji-list"
 5 | 
 6 | export const EMOJI: TextMatchTransformer = {
 7 |   dependencies: [],
 8 |   export: () => null,
 9 |   importRegExp: /:([a-z0-9_]+):/,
10 |   regExp: /:([a-z0-9_]+):/,
11 |   replace: (textNode, [, name]) => {
12 |     const emoji = emojiList.find((e) => e.aliases.includes(name))?.emoji
13 |     if (emoji) {
14 |       textNode.replace($createTextNode(emoji))
15 |     }
16 |   },
17 |   trigger: ":",
18 |   type: "text-match",
19 | }
20 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/transformers/markdown-equation-transformer.ts:
--------------------------------------------------------------------------------
 1 | import { TextMatchTransformer } from "@lexical/markdown"
 2 | 
 3 | import {
 4 |   $createEquationNode,
 5 |   $isEquationNode,
 6 |   EquationNode,
 7 | } from "@/registry/new-york-v4/editor/nodes/equation-node"
 8 | 
 9 | export const EQUATION: TextMatchTransformer = {
10 |   dependencies: [EquationNode],
11 |   export: (node) => {
12 |     if (!$isEquationNode(node)) {
13 |       return null
14 |     }
15 | 
16 |     return `$${node.getEquation()}$`
17 |   },
18 |   importRegExp: /\$([^$]+?)\$/,
19 |   regExp: /\$([^$]+?)\$$/,
20 |   replace: (textNode, match) => {
21 |     const [, equation] = match
22 |     const equationNode = $createEquationNode(equation, true)
23 |     textNode.replace(equationNode)
24 |   },
25 |   trigger: "$",
26 |   type: "text-match",
27 | }
28 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/transformers/markdown-hr-transformer.ts:
--------------------------------------------------------------------------------
 1 | import { ElementTransformer } from "@lexical/markdown"
 2 | import {
 3 |   $createHorizontalRuleNode,
 4 |   $isHorizontalRuleNode,
 5 |   HorizontalRuleNode,
 6 | } from "@lexical/react/LexicalHorizontalRuleNode"
 7 | import { LexicalNode } from "lexical"
 8 | 
 9 | export const HR: ElementTransformer = {
10 |   dependencies: [HorizontalRuleNode],
11 |   export: (node: LexicalNode) => {
12 |     return $isHorizontalRuleNode(node) ? "***" : null
13 |   },
14 |   regExp: /^(---|\*\*\*|___)\s?$/,
15 |   replace: (parentNode, _1, _2, isImport) => {
16 |     const line = $createHorizontalRuleNode()
17 | 
18 |     // TODO: Get rid of isImport flag
19 |     if (isImport || parentNode.getNextSibling() != null) {
20 |       parentNode.replace(line)
21 |     } else {
22 |       parentNode.insertBefore(line)
23 |     }
24 | 
25 |     line.selectNext()
26 |   },
27 |   type: "element",
28 | }
29 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/transformers/markdown-image-transformer.ts:
--------------------------------------------------------------------------------
 1 | import { TextMatchTransformer } from "@lexical/markdown"
 2 | 
 3 | import {
 4 |   $createImageNode,
 5 |   $isImageNode,
 6 |   ImageNode,
 7 | } from "@/registry/new-york-v4/editor/nodes/image-node"
 8 | 
 9 | export const IMAGE: TextMatchTransformer = {
10 |   dependencies: [ImageNode],
11 |   export: (node) => {
12 |     if (!$isImageNode(node)) {
13 |       return null
14 |     }
15 | 
16 |     return `![${node.getAltText()}](${node.getSrc()})`
17 |   },
18 |   importRegExp: /!(?:\[([^[]*)\])(?:\(([^(]+)\))/,
19 |   regExp: /!(?:\[([^[]*)\])(?:\(([^(]+)\))$/,
20 |   replace: (textNode, match) => {
21 |     const [, altText, src] = match
22 |     const imageNode = $createImageNode({
23 |       altText,
24 |       maxWidth: 800,
25 |       src,
26 |     })
27 |     textNode.replace(imageNode)
28 |   },
29 |   trigger: ")",
30 |   type: "text-match",
31 | }
32 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/transformers/markdown-tweet-transformer.ts:
--------------------------------------------------------------------------------
 1 | import { ElementTransformer } from "@lexical/markdown"
 2 | 
 3 | import {
 4 |   $createTweetNode,
 5 |   $isTweetNode,
 6 |   TweetNode,
 7 | } from "@/registry/new-york-v4/editor/nodes/embeds/tweet-node"
 8 | 
 9 | export const TWEET: ElementTransformer = {
10 |   dependencies: [TweetNode],
11 |   export: (node) => {
12 |     if (!$isTweetNode(node)) {
13 |       return null
14 |     }
15 | 
16 |     return `<tweet id="${node.getId()}" />`
17 |   },
18 |   regExp: /<tweet id="([^"]+?)"\s?\/>\s?$/,
19 |   replace: (textNode, _1, match) => {
20 |     const [, id] = match
21 |     const tweetNode = $createTweetNode(id)
22 |     textNode.replace(tweetNode)
23 |   },
24 |   type: "element",
25 | }
26 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/utils/collapsible.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | 
 9 | export function setDomHiddenUntilFound(dom: HTMLElement): void {
10 |   // @ts-expect-error
11 |   dom.hidden = "until-found"
12 | }
13 | 
14 | export function domOnBeforeMatch(dom: HTMLElement, callback: () => void): void {
15 |   dom.onbeforematch = callback
16 | }
17 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/utils/get-dom-range-rect.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | export function getDOMRangeRect(
 9 |   nativeSelection: Selection,
10 |   rootElement: HTMLElement
11 | ): DOMRect {
12 |   const domRange = nativeSelection.getRangeAt(0)
13 | 
14 |   let rect
15 | 
16 |   if (nativeSelection.anchorNode === rootElement) {
17 |     let inner = rootElement
18 |     while (inner.firstElementChild != null) {
19 |       inner = inner.firstElementChild as HTMLElement
20 |     }
21 |     rect = inner.getBoundingClientRect()
22 |   } else {
23 |     rect = domRange.getBoundingClientRect()
24 |   }
25 | 
26 |   return rect
27 | }
28 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/utils/get-selected-node.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | import { $isAtNodeEnd } from "@lexical/selection"
 9 | import { ElementNode, RangeSelection, TextNode } from "lexical"
10 | 
11 | export function getSelectedNode(
12 |   selection: RangeSelection
13 | ): TextNode | ElementNode {
14 |   const anchor = selection.anchor
15 |   const focus = selection.focus
16 |   const anchorNode = selection.anchor.getNode()
17 |   const focusNode = selection.focus.getNode()
18 |   if (anchorNode === focusNode) {
19 |     return anchorNode
20 |   }
21 |   const isBackward = selection.isBackward()
22 |   if (isBackward) {
23 |     return $isAtNodeEnd(focus) ? anchorNode : focusNode
24 |   } else {
25 |     return $isAtNodeEnd(anchor) ? anchorNode : focusNode
26 |   }
27 | }
28 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/utils/guard.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | export function isHTMLElement(x: unknown): x is HTMLElement {
 9 |   return x instanceof HTMLElement
10 | }
11 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/utils/is-mobile-width.ts:
--------------------------------------------------------------------------------
1 | /**
2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
3 |  *
4 |  * This source code is licensed under the MIT license found in the
5 |  * LICENSE file in the root directory of this source tree.
6 |  *
7 |  */
8 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/editor/utils/url.ts:
--------------------------------------------------------------------------------
 1 | /**
 2 |  * Copyright (c) Meta Platforms, Inc. and affiliates.
 3 |  *
 4 |  * This source code is licensed under the MIT license found in the
 5 |  * LICENSE file in the root directory of this source tree.
 6 |  *
 7 |  */
 8 | 
 9 | const SUPPORTED_URL_PROTOCOLS = new Set([
10 |   "http:",
11 |   "https:",
12 |   "mailto:",
13 |   "sms:",
14 |   "tel:",
15 | ])
16 | 
17 | export function sanitizeUrl(url: string): string {
18 |   try {
19 |     const parsedUrl = new URL(url)
20 |     // eslint-disable-next-line no-script-url
21 |     if (!SUPPORTED_URL_PROTOCOLS.has(parsedUrl.protocol)) {
22 |       return "about:blank"
23 |     }
24 |   } catch {
25 |     return url
26 |   }
27 |   return url
28 | }
29 | 
30 | // Source: https://stackoverflow.com/a/8234912/2013580
31 | const urlRegExp = new RegExp(
32 |   /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/
33 | )
34 | export function validateUrl(url: string): boolean {
35 |   // TODO Fix UI for link insertion; it should never default to an invalid URL such as https://.
36 |   // Maybe show a dialog where they user can type the URL before inserting it.
37 |   return url === "https://" || urlRegExp.test(url)
38 | }
39 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/hooks/use-mobile.ts:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | 
 3 | const MOBILE_BREAKPOINT = 768
 4 | 
 5 | export function useIsMobile() {
 6 |   const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
 7 | 
 8 |   React.useEffect(() => {
 9 |     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
10 |     const onChange = () => {
11 |       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
12 |     }
13 |     mql.addEventListener("change", onChange)
14 |     setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
15 |     return () => mql.removeEventListener("change", onChange)
16 |   }, [])
17 | 
18 |   return !!isMobile
19 | }
20 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/lib/utils.ts:
--------------------------------------------------------------------------------
1 | import { clsx, type ClassValue } from "clsx"
2 | import { twMerge } from "tailwind-merge"
3 | 
4 | export function cn(...inputs: ClassValue[]) {
5 |   return twMerge(clsx(inputs))
6 | }
7 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/ui/aspect-ratio.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
 4 | 
 5 | function AspectRatio({
 6 |   ...props
 7 | }: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
 8 |   return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
 9 | }
10 | 
11 | export { AspectRatio }
12 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/ui/avatar.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import * as AvatarPrimitive from "@radix-ui/react-avatar"
 5 | 
 6 | import { cn } from "@/lib/utils"
 7 | 
 8 | function Avatar({
 9 |   className,
10 |   ...props
11 | }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
12 |   return (
13 |     <AvatarPrimitive.Root
14 |       data-slot="avatar"
15 |       className={cn(
16 |         "relative flex size-8 shrink-0 overflow-hidden rounded-full",
17 |         className
18 |       )}
19 |       {...props}
20 |     />
21 |   )
22 | }
23 | 
24 | function AvatarImage({
25 |   className,
26 |   ...props
27 | }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
28 |   return (
29 |     <AvatarPrimitive.Image
30 |       data-slot="avatar-image"
31 |       className={cn("aspect-square size-full", className)}
32 |       {...props}
33 |     />
34 |   )
35 | }
36 | 
37 | function AvatarFallback({
38 |   className,
39 |   ...props
40 | }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
41 |   return (
42 |     <AvatarPrimitive.Fallback
43 |       data-slot="avatar-fallback"
44 |       className={cn(
45 |         "bg-muted flex size-full items-center justify-center rounded-full",
46 |         className
47 |       )}
48 |       {...props}
49 |     />
50 |   )
51 | }
52 | 
53 | export { Avatar, AvatarImage, AvatarFallback }
54 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/ui/checkbox.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
 5 | import { CheckIcon } from "lucide-react"
 6 | 
 7 | import { cn } from "@/lib/utils"
 8 | 
 9 | function Checkbox({
10 |   className,
11 |   ...props
12 | }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
13 |   return (
14 |     <CheckboxPrimitive.Root
15 |       data-slot="checkbox"
16 |       className={cn(
17 |         "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
18 |         className
19 |       )}
20 |       {...props}
21 |     >
22 |       <CheckboxPrimitive.Indicator
23 |         data-slot="checkbox-indicator"
24 |         className="flex items-center justify-center text-current transition-none"
25 |       >
26 |         <CheckIcon className="size-3.5" />
27 |       </CheckboxPrimitive.Indicator>
28 |     </CheckboxPrimitive.Root>
29 |   )
30 | }
31 | 
32 | export { Checkbox }
33 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/ui/collapsible.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
 4 | 
 5 | function Collapsible({
 6 |   ...props
 7 | }: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
 8 |   return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
 9 | }
10 | 
11 | function CollapsibleTrigger({
12 |   ...props
13 | }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
14 |   return (
15 |     <CollapsiblePrimitive.CollapsibleTrigger
16 |       data-slot="collapsible-trigger"
17 |       {...props}
18 |     />
19 |   )
20 | }
21 | 
22 | function CollapsibleContent({
23 |   ...props
24 | }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
25 |   return (
26 |     <CollapsiblePrimitive.CollapsibleContent
27 |       data-slot="collapsible-content"
28 |       {...props}
29 |     />
30 |   )
31 | }
32 | 
33 | export { Collapsible, CollapsibleTrigger, CollapsibleContent }
34 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/ui/input.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | 
 3 | import { cn } from "@/lib/utils"
 4 | 
 5 | function Input({ className, type, ...props }: React.ComponentProps<"input">) {
 6 |   return (
 7 |     <input
 8 |       type={type}
 9 |       data-slot="input"
10 |       className={cn(
11 |         "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
12 |         "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
13 |         "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
14 |         className
15 |       )}
16 |       {...props}
17 |     />
18 |   )
19 | }
20 | 
21 | export { Input }
22 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/ui/label.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import * as LabelPrimitive from "@radix-ui/react-label"
 5 | 
 6 | import { cn } from "@/lib/utils"
 7 | 
 8 | function Label({
 9 |   className,
10 |   ...props
11 | }: React.ComponentProps<typeof LabelPrimitive.Root>) {
12 |   return (
13 |     <LabelPrimitive.Root
14 |       data-slot="label"
15 |       className={cn(
16 |         "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
17 |         className
18 |       )}
19 |       {...props}
20 |     />
21 |   )
22 | }
23 | 
24 | export { Label }
25 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/ui/progress.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import * as ProgressPrimitive from "@radix-ui/react-progress"
 5 | 
 6 | import { cn } from "@/lib/utils"
 7 | 
 8 | function Progress({
 9 |   className,
10 |   value,
11 |   ...props
12 | }: React.ComponentProps<typeof ProgressPrimitive.Root>) {
13 |   return (
14 |     <ProgressPrimitive.Root
15 |       data-slot="progress"
16 |       className={cn(
17 |         "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
18 |         className
19 |       )}
20 |       {...props}
21 |     >
22 |       <ProgressPrimitive.Indicator
23 |         data-slot="progress-indicator"
24 |         className="bg-primary h-full w-full flex-1 transition-all"
25 |         style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
26 |       />
27 |     </ProgressPrimitive.Root>
28 |   )
29 | }
30 | 
31 | export { Progress }
32 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/ui/separator.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import * as SeparatorPrimitive from "@radix-ui/react-separator"
 5 | 
 6 | import { cn } from "@/lib/utils"
 7 | 
 8 | function Separator({
 9 |   className,
10 |   orientation = "horizontal",
11 |   decorative = true,
12 |   ...props
13 | }: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
14 |   return (
15 |     <SeparatorPrimitive.Root
16 |       data-slot="separator"
17 |       decorative={decorative}
18 |       orientation={orientation}
19 |       className={cn(
20 |         "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
21 |         className
22 |       )}
23 |       {...props}
24 |     />
25 |   )
26 | }
27 | 
28 | export { Separator }
29 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/ui/skeleton.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils"
 2 | 
 3 | function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
 4 |   return (
 5 |     <div
 6 |       data-slot="skeleton"
 7 |       className={cn("bg-accent animate-pulse rounded-md", className)}
 8 |       {...props}
 9 |     />
10 |   )
11 | }
12 | 
13 | export { Skeleton }
14 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/ui/sonner.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import { useTheme } from "next-themes"
 4 | import { Toaster as Sonner, ToasterProps } from "sonner"
 5 | 
 6 | const Toaster = ({ ...props }: ToasterProps) => {
 7 |   const { theme = "system" } = useTheme()
 8 | 
 9 |   return (
10 |     <Sonner
11 |       theme={theme as ToasterProps["theme"]}
12 |       className="toaster group"
13 |       style={
14 |         {
15 |           "--normal-bg": "var(--popover)",
16 |           "--normal-text": "var(--popover-foreground)",
17 |           "--normal-border": "var(--border)",
18 |         } as React.CSSProperties
19 |       }
20 |       {...props}
21 |     />
22 |   )
23 | }
24 | 
25 | export { Toaster }
26 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/ui/switch.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import * as SwitchPrimitive from "@radix-ui/react-switch"
 5 | 
 6 | import { cn } from "@/lib/utils"
 7 | 
 8 | function Switch({
 9 |   className,
10 |   ...props
11 | }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
12 |   return (
13 |     <SwitchPrimitive.Root
14 |       data-slot="switch"
15 |       className={cn(
16 |         "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
17 |         className
18 |       )}
19 |       {...props}
20 |     >
21 |       <SwitchPrimitive.Thumb
22 |         data-slot="switch-thumb"
23 |         className={cn(
24 |           "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
25 |         )}
26 |       />
27 |     </SwitchPrimitive.Root>
28 |   )
29 | }
30 | 
31 | export { Switch }
32 | 


--------------------------------------------------------------------------------
/registry/new-york-v4/ui/textarea.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | 
 3 | import { cn } from "@/lib/utils"
 4 | 
 5 | function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
 6 |   return (
 7 |     <textarea
 8 |       data-slot="textarea"
 9 |       className={cn(
10 |         "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
11 |         className
12 |       )}
13 |       {...props}
14 |     />
15 |   )
16 | }
17 | 
18 | export { Textarea }
19 | 


--------------------------------------------------------------------------------
/registry/registry-categories.ts:
--------------------------------------------------------------------------------
1 | export const registryCategories = [
2 |   {
3 |     name: "Editor",
4 |     slug: "editor",
5 |     hidden: false,
6 |   },
7 | ]
8 | 


--------------------------------------------------------------------------------
/registry/registry-charts.ts:
--------------------------------------------------------------------------------
1 | import { Registry } from "./schema"
2 | 
3 | export const charts: Registry["items"] = []
4 | 


--------------------------------------------------------------------------------
/registry/registry-hooks.ts:
--------------------------------------------------------------------------------
1 | import { Registry } from "./schema"
2 | 
3 | export const hooks: Registry["items"] = []
4 | 


--------------------------------------------------------------------------------
/registry/registry-internal.ts:
--------------------------------------------------------------------------------
1 | import { Registry } from "./schema"
2 | 
3 | export const internal: Registry["items"] = []
4 | 


--------------------------------------------------------------------------------
/registry/registry-lib.ts:
--------------------------------------------------------------------------------
1 | import { Registry } from "./schema"
2 | 
3 | export const lib: Registry["items"] = []
4 | 


--------------------------------------------------------------------------------
/source.config.ts:
--------------------------------------------------------------------------------
 1 | import {
 2 |   defineConfig,
 3 |   defineDocs,
 4 |   frontmatterSchema,
 5 | } from "fumadocs-mdx/config"
 6 | import rehypePrettyCode from "rehype-pretty-code"
 7 | import { z } from "zod"
 8 | 
 9 | import { transformers } from "@/lib/highlight-code"
10 | 
11 | export default defineConfig({
12 |   mdxOptions: {
13 |     rehypePlugins: (plugins) => {
14 |       plugins.shift()
15 |       plugins.push([
16 |         // TODO: fix the type.
17 |         // eslint-disable-next-line @typescript-eslint/no-explicit-any
18 |         rehypePrettyCode as any,
19 |         {
20 |           theme: {
21 |             dark: "github-dark",
22 |             light: "github-light-default",
23 |           },
24 |           transformers,
25 |         },
26 |       ])
27 | 
28 |       return plugins
29 |     },
30 |   },
31 | })
32 | 
33 | export const docs = defineDocs({
34 |   dir: "content/docs",
35 |   docs: {
36 |     schema: frontmatterSchema.extend({
37 |       links: z
38 |         .object({
39 |           doc: z.string().optional(),
40 |           api: z.string().optional(),
41 |         })
42 |         .optional(),
43 |     }),
44 |   },
45 | })
46 | 


--------------------------------------------------------------------------------
/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "ES2017",
 4 |     "lib": ["dom", "dom.iterable", "esnext"],
 5 |     "allowJs": true,
 6 |     "skipLibCheck": true,
 7 |     "strict": true,
 8 |     "noEmit": true,
 9 |     "esModuleInterop": true,
10 |     "module": "esnext",
11 |     "moduleResolution": "bundler",
12 |     "resolveJsonModule": true,
13 |     "isolatedModules": true,
14 |     "jsx": "preserve",
15 |     "incremental": true,
16 |     "plugins": [
17 |       {
18 |         "name": "next"
19 |       }
20 |     ],
21 |     "baseUrl": ".",
22 |     "paths": {
23 |       "@/*": ["./*"],
24 |       "react": ["./node_modules/@types/react"]
25 |     }
26 |   },
27 |   "include": [
28 |     "next-env.d.ts",
29 |     "**/*.ts",
30 |     "**/*.tsx",
31 |     ".next/types/**/*.ts",
32 |     "scripts/build-registry.mts",
33 |     "next.config.mjs"
34 |   ],
35 |   "exclude": ["node_modules"]
36 | }
37 | 


--------------------------------------------------------------------------------
/tsconfig.scripts.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://json.schemastore.org/tsconfig",
 3 |   "extends": "./tsconfig.json",
 4 |   "compilerOptions": {
 5 |     "target": "ES2017",
 6 |     "module": "ESNext",
 7 |     "moduleResolution": "node",
 8 |     "esModuleInterop": true,
 9 |     "isolatedModules": false,
10 |     "allowImportingTsExtensions": true
11 |   },
12 |   "include": ["scripts/**/*.{ts,mts}"],
13 |   "exclude": ["node_modules"]
14 | }
15 | 


---------------------------------------------------------