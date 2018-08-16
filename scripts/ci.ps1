$projectRoot = $pwd
$scriptsDir = "$pwd\scripts"
cd $projectRoot

Write-Host "Setting path"
# Add npm and yarn to path
$env:path += ";$env:AppData\npm;"

function Clean {
    InstallDependencies

    Try {
        Write-Host "Cleaning project artifacts"
        yarn run clean
    } Catch {
        Write-Error "Failed to clean project artifacts`nError: $_"
        Exit(1)
    }
}

function Build {
    InstallDependencies

    Try {
        Write-Host "Running tests"
        $testFailureMessage = "error Command failed with exit code 1."

        # capture all output from stdout and stderr
        $testOutput = (yarn test --bail --ci) 2>&1

        if ($testOutput -match $testFailureMessage) {
            Throw "Tests failed to run`n$testOutput"
        }

        Write-Host "Executing Build"
        yarn run build
    } Catch {
        Write-Error "Failed to build project`nError: $_"
        Exit(1)
    }
}

function Package {
    Param(
        $id,
        $version,
        $octopusServer,
        $apiKey
    )

    InstallDependencies

    Try {
        Write-Host "Creating Octopack"
        yarn run octopack --id="Digital.CDN" --version=$version --basePath="build/global"  --outFolder="bin" --overwrite
        yarn run clean-cdn
        yarn run octopack --id=$id --version=$version --basePath="build" --outFolder="bin" --overwrite
        yarn run octopush --package="bin/$id.$version.nupkg" --server=$octopusServer --apiKey=$apiKey
        yarn run octopush --package="bin/Digital.CDN.$version.nupkg" --server=$octopusServer --apiKey=$apiKey
    } Catch {
        Write-Error "Failed to create octopackage`nError: $_"
        Exit(1)
    }
}

function InstallDependencies {
    Try {
        Write-Host "Installing Packages"
        yarn install
    } Catch {
        Write-Error "Failed to install packages`nError: $_"
        Exit(1)
    }
}
