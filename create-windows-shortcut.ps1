$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$shortcutName = "Web Upper " + [char]0x8D77 + [char]0x52D5 + ".lnk"
$shortcutPath = Join-Path $root $shortcutName
$target = Join-Path $env:SystemRoot "System32\WindowsPowerShell\v1.0\powershell.exe"
$script = Join-Path $root "launch-web-upper.ps1"
$icon = (Join-Path $env:SystemRoot "System32\imageres.dll") + ",109"

$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = $target
$shortcut.Arguments = "-NoProfile -ExecutionPolicy Bypass -File `"$script`""
$shortcut.WorkingDirectory = $root
$shortcut.IconLocation = $icon
$shortcut.Description = "Launch Web Upper"
$shortcut.Save()

Write-Host "Created: $shortcutPath"
