document.addEventListener("DOMContentLoaded", () => { 
 
    /* ===================================================== 
       ELEMENTS 
    ===================================================== */ 
 
    const bootText = document.getElementById("boot-text"); 
    const progress = document.getElementById("loading-progress"); 
    const percent = document.getElementById("loading-percent"); 
 
    const bootScreen = document.getElementById("boot-screen"); 
    const alertScreen = document.getElementById("alert-screen"); 
    const uninstallScreen = document.getElementById("uninstall-screen"); 
    const recoveryScreen = document.getElementById("recovery-screen"); 
    const dashboard = document.getElementById("dashboard"); 
 
    const uninstallButton = 
        document.getElementById("uninstall-btn"); 
 
    const continueButton = 
        document.getElementById("continue-btn"); 
 
    const uninstallText = 
        document.getElementById("uninstall-text"); 
 
    const uninstallProgress = 
        document.getElementById("uninstall-progress"); 
 
    const uninstallPercent = 
        document.getElementById("uninstall-percent"); 
 
    const smileButton = 
        document.getElementById("smile-btn"); 
 
    const smileMessage = 
        document.getElementById("smile-message"); 
 
    const backgroundMusic = 
        document.getElementById("background-music"); 
 
 
    /* ===================================================== 
       MEMORIES 
    ===================================================== */ 
 
    const memoriesButton = 
        document.getElementById("memories-btn"); 
 
    const memoriesModal = 
        document.getElementById("memories-modal"); 
 
    const closeMemories = 
        document.getElementById("close-memories"); 
 
 
    /* ===================================================== 
       PLAYLIST 
    ===================================================== */ 
 
    const playlistButton = 
        document.getElementById("playlist-btn"); 
 
    const playlistModal = 
        document.getElementById("playlist-modal"); 
 
    const closePlaylist = 
        document.getElementById("close-playlist"); 
 
    const playlistPlay = 
        document.getElementById("playlist-play"); 
 
    const playlistPause = 
        document.getElementById("playlist-pause"); 
 
    const playlistVolume = 
        document.getElementById("playlist-volume"); 
 
    const playlistStatus = 
        document.getElementById("playlist-status"); 
 
 
    /* ===================================================== 
       MUSIC 
    ===================================================== */ 
 
    if (backgroundMusic) { 
        backgroundMusic.volume = 0.12; 
    } 
 
 
    /* ===================================================== 
       BOOT 
    ===================================================== */ 
 
    const bootMessages = [ 
        "Initializing SISTER OS...", 
        "Scanning emotional systems...", 
        "Detecting previous relationship...", 
        "Relationship.exe detected.", 
        "Checking system stability...", 
        "Backing up important memories...", 
        "Preparing system recovery...", 
        "Installing Happiness Module..." 
    ]; 
 
    let bootMessageIndex = 0; 
    let bootProgress = 0; 
 
 
    function addBootMessage() { 
 
        if ( 
            bootText && 
            bootMessageIndex < bootMessages.length 
        ) { 
 
            bootText.innerHTML += 
                bootMessages[bootMessageIndex] + "<br>"; 
 
            bootMessageIndex++; 
        } 
    } 
 
 
    function updateBoot() { 
 
        if (bootProgress <= 100) { 
 
            if (progress) { 
                progress.style.width = 
                    bootProgress + "%"; 
            } 
 
            if (percent) { 
                percent.textContent = 
                    bootProgress + "%"; 
            } 
 
            if (bootProgress % 12 === 0) { 
                addBootMessage(); 
            } 
 
            bootProgress++; 
 
            setTimeout(updateBoot, 60); 
 
        } else { 
 
            if (bootText) { 
                bootText.innerHTML += 
                    "<br>BOOT COMPLETE ✓"; 
            } 
 
            setTimeout(() => { 
 
                if (bootScreen) { 
                    bootScreen.style.display = "none"; 
                } 
 
                if (alertScreen) { 
                    alertScreen.style.display = "flex"; 
                } 
 
            }, 1200); 
        } 
    } 
 
 
    addBootMessage(); 
    updateBoot(); 
 
 
    /* ===================================================== 
       UNINSTALL 
    ===================================================== */ 
 
    const uninstallMessages = [ 
        "Starting relationship removal...", 
        "Removing old files...", 
        "Clearing emotional cache...", 
        "Removing unnecessary drama...", 
        "Deleting overthinking.exe...", 
        "Checking important memories...", 
        "Important memories protected ✓", 
        "Finalizing system cleanup..." 
    ]; 
 
 
    if (uninstallButton) { 
 
        uninstallButton.addEventListener("click", () => { 
 
            if (alertScreen) { 
                alertScreen.style.display = "none"; 
            } 
 
            if (uninstallScreen) { 
                uninstallScreen.style.display = "flex"; 
            } 
 
            let value = 0; 
            let messageIndex = 0; 
 
 
            function uninstall() { 
 
                if (value <= 100) { 
 
                    if (uninstallProgress) { 
                        uninstallProgress.style.width = 
                            value + "%"; 
                    } 
 
                    if (uninstallPercent) { 
                        uninstallPercent.textContent = 
                            value + "%"; 
                    } 
 
                    if ( 
                        value % 12 === 0 && 
                        messageIndex < 
                        uninstallMessages.length 
                    ) { 
 
                        if (uninstallText) { 
                            uninstallText.innerHTML += 
                                uninstallMessages[messageIndex] + 
                                "<br>"; 
                        } 
 
                        messageIndex++; 
                    } 
 
                    value++; 
 
                    setTimeout(uninstall, 70); 
 
                } else { 
 
                    if (uninstallText) { 
                        uninstallText.innerHTML += 
                            "<br>✓ RELATIONSHIP.EXE REMOVED"; 
                    } 
 
                    setTimeout(() => { 
 
                        if (uninstallScreen) { 
                            uninstallScreen.style.display = "none"; 
                        } 
 
                        if (recoveryScreen) { 
                            recoveryScreen.style.display = "flex"; 
                        } 
 
                    }, 1500); 
                } 
            } 
 
 
            if (uninstallText) { 
                uninstallText.innerHTML = 
                    "Preparing uninstall...<br>"; 
            } 
 
            uninstall(); 
 
        }); 
    } 
 
 
    /* ===================================================== 
       CONTINUE + MUSIC 
    ===================================================== */ 
 
    if (continueButton) { 
 
        continueButton.addEventListener("click", () => { 
 
            if (recoveryScreen) { 
                recoveryScreen.style.display = "none"; 
            } 
 
            if (dashboard) { 
                dashboard.style.display = "block"; 
            } 
 
            if (backgroundMusic) { 
 
                backgroundMusic.play().catch(() => { 
 
                    console.log( 
                        "Music could not start automatically." 
                    ); 
 
                }); 
            } 
 
        }); 
    } 
 
 
    /* ===================================================== 
       HAPPINESS GENERATOR 
    ===================================================== */ 
 
    const happinessMessages = [ 
 
        "Reminder: you're actually pretty awesome. 💗", 
 
        "Emergency diagnosis: you need snacks. 🍕", 
 
        "Your brother has officially prescribed 24 hours of zero overthinking. 😂", 
 
        "Plot twist: this is just character development. ✨", 
 
        "System message: You have survived worse. 💪", 
 
        "Achievement unlocked: New Chapter! 🏆", 
 
        "Breaking news: You are still you. And that's pretty great. ❤️", 
 
        "Recommended activity: Laugh at something completely stupid. 😂", 
 
        "Warning: Excessive overthinking detected. Please go outside. 🌱", 
 
        "Sister OS says: Keep going. You've got this. 🌸", 
 
        "ERROR 404: Bad mood not found. 😂", 
 
        "System update: Smile.exe has been successfully installed. 😎", 
 
        "Brother-certified happiness detected. 💗", 
 
        "Alert: Your smile is required immediately. 🚨😂", 
 
        "Loading confidence... 100% COMPLETE. ✨" 
 
    ]; 
 
 
    if (smileButton) { 
 
        smileButton.addEventListener("click", () => { 
 
            if ( 
                smileButton.dataset.busy === "true" 
            ) { 
                return; 
            } 
 
            smileButton.dataset.busy = "true"; 
 
            if (smileMessage) { 
 
                smileMessage.textContent = 
                    "🔍 Scanning happiness levels..."; 
 
                smileMessage.style.opacity = "1"; 
                smileMessage.style.transform = 
                    "scale(0.9)"; 
            } 
 
            const originalText = 
                smileButton.textContent; 
 
            smileButton.textContent = 
                "🔄 ANALYZING..."; 
 
            smileButton.disabled = true; 
 
 
            setTimeout(() => { 
 
                const randomIndex = 
                    Math.floor( 
                        Math.random() * 
                        happinessMessages.length 
                    ); 
 
                if (smileMessage) { 
 
                    smileMessage.textContent = 
                        "✨ " + 
                        happinessMessages[randomIndex]; 
 
                    smileMessage.style.transform = 
                        "scale(1.08)"; 
 
                    setTimeout(() => { 
 
                        smileMessage.style.transform = 
                            "scale(1)"; 
 
                    }, 200); 
                } 
 
                smileButton.textContent = 
                    originalText; 
 
                smileButton.disabled = false; 
 
                smileButton.dataset.busy = 
                    "false"; 
 
            }, 900); 
 
        }); 
    } 
 
 
    /* ===================================================== 
       📸 MEMORIES 
    ===================================================== */ 
 
    if ( 
        memoriesButton && 
        memoriesModal 
    ) { 
 
        memoriesButton.addEventListener("click", () => { 
 
            memoriesModal.classList.add("show"); 
 
        }); 
    } 
 
 
    if ( 
        closeMemories && 
        memoriesModal 
    ) { 
 
        closeMemories.addEventListener("click", () => { 
 
            memoriesModal.classList.remove("show"); 
 
        }); 
    } 
 
 
    if (memoriesModal) { 
 
        memoriesModal.addEventListener("click", (event) => { 
 
            if (event.target === memoriesModal) { 
 
                memoriesModal.classList.remove("show"); 
 
            } 
 
        }); 
    } 
 
 
    /* ===================================================== 
       🎵 PLAYLIST 
    ===================================================== */ 
 
    if ( 
        playlistButton && 
        playlistModal 
    ) { 
 
        playlistButton.addEventListener("click", () => { 
 
            playlistModal.classList.add("show"); 
 
            if (playlistStatus) { 
 
                playlistStatus.textContent = 
                    "Ready when you are. 🌸"; 
 
            } 
 
        }); 
    } 
 
 
    /* ===================================================== 
       CLOSE PLAYLIST 
    ===================================================== */ 
 
    if ( 
        closePlaylist && 
        playlistModal 
    ) { 
 
        closePlaylist.addEventListener("click", () => { 
 
            playlistModal.classList.remove("show"); 
 
        }); 
    } 
 
 
    /* ===================================================== 
       PLAY 
    ===================================================== */ 
 
    if ( 
        playlistPlay && 
        backgroundMusic 
    ) { 
 
        playlistPlay.addEventListener("click", () => { 
 
            backgroundMusic.play().then(() => { 
 
                if (playlistStatus) { 
 
                    playlistStatus.textContent = 
                        "🎵 Playing your comeback soundtrack... 💗"; 
 
                } 
 
            }).catch(() => { 
 
                if (playlistStatus) { 
 
                    playlistStatus.textContent = 
                        "Click PLAY again to start the music. 🎵"; 
 
                } 
 
            }); 
 
        }); 
    } 
 
 
    /* ===================================================== 
       PAUSE 
    ===================================================== */ 
 
    if ( 
        playlistPause && 
        backgroundMusic 
    ) { 
 
        playlistPause.addEventListener("click", () => { 
 
            backgroundMusic.pause(); 
 
            if (playlistStatus) { 
 
                playlistStatus.textContent = 
                    "⏸️ Music paused. Take your time. 💗"; 
 
            } 
 
        }); 
    } 
 
 
    /* ===================================================== 
       VOLUME 
    ===================================================== */ 
 
    if ( 
        playlistVolume && 
        backgroundMusic 
    ) { 
 
        playlistVolume.addEventListener("input", () => { 
 
            backgroundMusic.volume = 
                playlistVolume.value; 
 
        }); 
    } 
 
 
    /* ===================================================== 
       CLOSE PLAYLIST BY CLICKING OUTSIDE 
    ===================================================== */ 
 
    if (playlistModal) { 
 
        playlistModal.addEventListener("click", (event) => { 
 
            if (event.target === playlistModal) { 
 
                playlistModal.classList.remove("show"); 
 
            } 
 
        }); 
    } 
 
});  