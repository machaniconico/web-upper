param(
  [switch]$Desktop
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$shortcutName = "Web Upper " + [char]0x8D77 + [char]0x52D5 + ".lnk"
$shortcutDescription = "Web Upper " + [char]0x3092 + [char]0x8D77 + [char]0x52D5 + [char]0x3057 + [char]0x307E + [char]0x3059
$createdMessage = "Web Upper " + [char]0x8D77 + [char]0x52D5 + [char]0x30A2 + [char]0x30A4 + [char]0x30B3 + [char]0x30F3 + [char]0x3092 + [char]0x4F5C + [char]0x6210 + [char]0x3057 + [char]0x307E + [char]0x3057 + [char]0x305F
$shortcutDirectory = if ($Desktop) {
  [Environment]::GetFolderPath("Desktop")
} else {
  $root
}
$shortcutPath = Join-Path $shortcutDirectory $shortcutName
$target = Join-Path $env:SystemRoot "System32\WindowsPowerShell\v1.0\powershell.exe"
$script = Join-Path $root "launch-web-upper.ps1"
$iconPath = Join-Path $root "assets\web-upper-icon.ico"
$icon = if (Test-Path $iconPath) {
  "$iconPath,0"
} else {
  (Join-Path $env:SystemRoot "System32\imageres.dll") + ",109"
}

$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = $target
$shortcut.Arguments = "-NoProfile -ExecutionPolicy Bypass -File `"$script`""
$shortcut.WorkingDirectory = $root
$shortcut.IconLocation = $icon
$shortcut.Description = $shortcutDescription
$shortcut.WindowStyle = 7
$shortcut.Save()

Write-Host ($createdMessage + ": " + $shortcutPath)
