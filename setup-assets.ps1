# Setup script to link Gayathri's authentic photo and resume PDF to the public directory

$photoSource = "C:\Users\sivas\.gemini\antigravity-ide\brain\86b85ea1-9ec6-4cd8-9e1e-5f8306b47e7e\.user_uploaded\media_1791445271143.png"
$resumeSource = "C:\Users\sivas\Downloads\Gayathri_Gunda.pdf"

if (-not (Test-Path "public")) {
    New-Item -ItemType Directory -Path "public" -Force | Out-Null
}

if (Test-Path $photoSource) {
    Copy-Item -Path $photoSource -Destination "public\gayathri.png" -Force
    Write-Host "[OK] Copied Gayathri's authentic portrait photo to public\gayathri.png" -ForegroundColor Green
} else {
    Write-Host "[Warning] Photo source not found at $photoSource. Please copy your photo to public\gayathri.png" -ForegroundColor Yellow
}

if (Test-Path $resumeSource) {
    Copy-Item -Path $resumeSource -Destination "public\resume.pdf" -Force
    Write-Host "[OK] Copied Gayathri's resume PDF to public\resume.pdf" -ForegroundColor Green
} else {
    Write-Host "[Warning] Resume source not found at $resumeSource. Please copy your resume to public\resume.pdf" -ForegroundColor Yellow
}
