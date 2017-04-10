#!/bin/sh

(
    cd "$(dirname "$0")";
    tsc --sourceMap --strictNullChecks --module amd *.ts
)
