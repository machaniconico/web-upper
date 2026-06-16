$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = if ($env:PORT) { [int]$env:PORT } else { 4173 }
$url = "http://localhost:$port"

function Show-WebUpperMessage($message) {
  try {
    Add-Type -AssemblyName PresentationFramework -ErrorAction Stop
    [System.Windows.MessageBox]::Show($message, "Web Upper") | Out-Null
  } catch {
    Write-Host $message
  }
}

function Test-WebUpperServer {
  try {
    $response = Invoke-WebRequest -Uri "$url/health" -UseBasicParsing -TimeoutSec 2
    return $response.Content -eq "ok"
  } catch {
    return $false
  }
}

if (-not (Test-WebUpperServer)) {
  try {
    Start-Process -WindowStyle Hidden -FilePath "node" -ArgumentList "server.js" -WorkingDirectory $root
  } catch {
    Show-WebUpperMessage "Failed to start Web Upper. Please confirm Node.js is installed."
    exit 1
  }

  $ready = $false
  for ($i = 0; $i -lt 30; $i++) {
    Start-Sleep -Milliseconds 300
    if (Test-WebUpperServer) {
      $ready = $true
      break
    }
  }

  if (-not $ready) {
    Show-WebUpperMessage "Failed to confirm Web Upper startup. Please check Node.js and port $port."
    exit 1
  }
}

Start-Process $url
