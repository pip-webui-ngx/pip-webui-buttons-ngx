# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Buttons

![](https://img.shields.io/badge/license-MIT-blue.svg)

Pip.WebUI.Buttons provides a selection of button controls: toggle buttons, action buttons, drilldown lists, etc.

### Action list

**Is a set of big action buttons that are placed at the bottom of a page**

**Using**

Example with using angular-material components: mat-button and mat-icon.

```html
<pip-action-list>
    <button mat-button class="pip-action-list-item">
        <mat-icon>home</mat-icon>
        <span class="pip-title">Home</span>
    </button>
</pip-action-list>
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-buttons/raw/master/doc/images/action-list.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-buttons/raw/master/doc/images/action-list.png"/>
</a>

### Drilldown list

**Is a list with clickable items, that lead to detail information**

**Using**

Example with using angular-material components: mat-button and mat-icon.

``` html
<pip-drilldown-list>
  <button mat-button class="pip-drilldown-list-item pip-selected" >
        <div class="pip-content">
            <mat-icon class="pip-icon">chat_bubble</mat-icon>
            <p class="pip-title">Chat</p>
            <mat-icon>chevron_right</mat-icon>
        </div>
    </button>
  <button mat-button class="pip-drilldown-list-item pip-drilldown-list-item-lg">
        <div class="pip-content">
            <mat-icon class="pip-icon">mail</mat-icon>
            <div class="pip-subcontent">
                <p class="pip-title">Mails</p>
                <p class="pip-subtitle">Inbox: 23</p>
            </div>
            <mat-icon>chevron_right</mat-icon>
        </div>
    </button>
</pip-drilldown-list>
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-buttons/raw/master/doc/images/drilldown-list.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-buttons/raw/master/doc/images/drilldown-list.png"/>
</a>

### Toggle buttons

**Control implement multiple radio buttons. Only one of them can be pressed at any time. On phones buttons are replaced with dropdown list**

**Using**

Example with using angular-material components: mat-button-toggle-group and mat-button-toggle. Add **pip-button-toggle-group** class to restyle angular-material toggle buttons.

```html
<mat-button-toggle-group class="pip-button-toggle-group">
  <mat-button-toggle fxFlex="fill" value="goal" style="text-align: center">
    <!--mat-icon>format_align_left</mat-icon-->
    Goal
  </mat-button-toggle>
  <mat-button-toggle fxFlex="fill" value="dream" style="text-align: center">
    <!--mat-icon>format_align_center</mat-icon-->
    Dream
  </mat-button-toggle>
  <mat-button-toggle fxFlex="fill" value="task" style="text-align: center">
    <!--mat-icon>format_align_right</mat-icon-->
    Task
  </mat-button-toggle>
  <mat-button-toggle fxFlex="fill" value="area" disabled style="text-align: center">
    <!--mat-icon>format_align_justify</mat-icon-->
    Area
  </mat-button-toggle>
</mat-button-toggle-group>
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-buttons/raw/master/doc/images/toggle-buttons.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-buttons/raw/master/doc/images/toggle-buttons.png"/>
</a>

## Installation

To install this module using npm:

```bash
npm install pip-webui2-buttons --save
```

## <a name="license"></a>License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use.
