#!/bin/bash
# usage: ocrp.sh tag pdf page
tag=$1; pdf=$2; p=$3; out=${OCR_DIR:-/home/claude/ocr}/$tag/p$(printf %04d $p)
mkdir -p ${OCR_DIR:-/home/claude/ocr}/$tag
[ -s $out.txt ] && exit 0
pdftoppm -f $p -l $p -r 200 -gray -png "$pdf" $out.img >/dev/null 2>&1
img=$(ls $out.img*.png | head -1)
TESSDATA_PREFIX=/root/tessdata tesseract "$img" $out -l vie --psm 3 >/dev/null 2>&1
rm -f $out.img*.png
