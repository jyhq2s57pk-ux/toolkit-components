/**
 * Design System Z-Index Tokens
 *
 * A semantic z-index scale for layering UI elements.
 * Use these tokens instead of arbitrary z-index values.
 */

export const zIndex = {
  /** Behind everything, for hidden elements */
  hide: -1,
  /** Base layer, default stacking context */
  base: 0,
  /** Dropdowns and select menus */
  dropdown: 10,
  /** Sticky headers and navigation */
  sticky: 20,
  /** Overlays and backdrops */
  overlay: 30,
  /** Modal dialogs */
  modal: 40,
  /** Popovers */
  popover: 50,
  /** Tooltips - highest layer */
  tooltip: 60,
} as const;

export type ZIndexToken = typeof zIndex;
