# Playwright `page` Methods: Promise vs Sync

## Returns a Promise (use `await`)

| Category | Method | What it does |
|---|---|---|
| Navigation | `page.goto(url)` | Open a URL |
| Navigation | `page.reload()` | Reload the page |
| Navigation | `page.goBack()` / `page.goForward()` | Browser history |
| Navigation | `page.setContent(html)` | Load custom HTML |
| Action | `page.click(selector)` | Click an element |
| Action | `page.dblclick(selector)` | Double click |
| Action | `page.fill(selector, text)` | Type into an input |
| Action | `page.press(selector, key)` | Press a key |
| Action | `page.check()` / `page.uncheck()` | Tick or untick a checkbox |
| Action | `page.selectOption()` | Pick a dropdown value |
| Action | `page.hover(selector)` | Mouse over |
| Action | `page.setInputFiles()` | Upload a file |
| Action | `page.dragAndDrop(src, dest)` | Drag and drop |
| Read | `page.title()` | Page title |
| Read | `page.content()` | Full HTML |
| Read | `page.textContent()` / `page.innerText()` | Element text |
| Read | `page.getAttribute()` | Attribute value |
| Read | `page.inputValue()` | Value of an input |
| Read | `page.isVisible()` / `isChecked()` / `isEnabled()` | Element state |
| Read | `page.evaluate(fn)` | Run JS in the page |
| Wait | `page.waitForSelector()` | Wait for an element |
| Wait | `page.waitForURL()` | Wait for a URL |
| Wait | `page.waitForLoadState()` | Wait for load state |
| Wait | `page.waitForResponse()` / `waitForRequest()` | Wait for network call |
| Wait | `page.waitForFunction()` | Wait for a JS condition |
| Wait | `page.waitForEvent()` | Wait for popup, download, etc. |
| Wait | `page.waitForTimeout(ms)` | Fixed delay (avoid) |
| Capture | `page.screenshot()` | Take a screenshot |
| Capture | `page.pdf()` | Save as PDF (Chromium only) |
| Setup | `page.route()` | Mock or intercept requests |
| Setup | `page.setViewportSize()` | Resize the window |
| Setup | `page.addInitScript()` / `addScriptTag()` | Inject scripts |
| Setup | `page.setExtraHTTPHeaders()` | Add headers |
| Control | `page.bringToFront()` | Focus the tab |
| Control | `page.close()` | Close the page |

## Sync (no `await`)

| Category | Method | What it does |
|---|---|---|
| Locators | `page.locator(selector)` | Build a locator |
| Locators | `page.getByRole()` | Find by role |
| Locators | `page.getByText()` | Find by text |
| Locators | `page.getByLabel()` | Find by label |
| Locators | `page.getByPlaceholder()` | Find by placeholder |
| Locators | `page.getByTestId()` | Find by test id |
| Locators | `page.frameLocator()` | Target an iframe |
| Local info | `page.url()` | Current URL string |
| Local info | `page.frames()` / `page.mainFrame()` | Frame objects |
| Local info | `page.viewportSize()` | Current size |
| Local info | `page.isClosed()` | Closed or not |
| Config | `page.setDefaultTimeout()` | Change timeout |
| Config | `page.setDefaultNavigationTimeout()` | Change nav timeout |
| Events | `page.on()` / `page.once()` | Register a listener |

## Locator actions (also Promises)

| Method | What it does |
|---|---|
| `locator.click()` | Click |
| `locator.fill()` | Type into an input |
| `locator.textContent()` | Read text |
| `locator.isVisible()` | Check visibility |
| `locator.count()` | Number of matches |
| `locator.allTextContents()` | Text of all matches |
| `expect(locator).toBeVisible()` | Assertion (needs `await`) |

## Quick rule

| If the method... | `await`? |
|---|---|
| Does something in the browser (goto, click, title, screenshot) | **Yes** |
| Only builds a description or reads a local value (locator, url) | No |

> Tip: if you hover over a method in VS Code and its return type shows `Promise<...>`, it needs `await`.
