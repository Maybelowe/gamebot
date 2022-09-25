{ pkgs }: {
    deps = [
        pkgs.haskellPackages.nix-output-monitor
        pkgs.cowsay
        pkgs.nodejs-16_x
        pkgs.ffmpeg
        pkgs.libwebp
        pkgs.imagemagick
    ];
}