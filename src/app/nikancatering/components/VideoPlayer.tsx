"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";

interface VideoPlayerProps {
  src: string;
}

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const hideControlsTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const isDraggingRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [bufferedPercent, setBufferedPercent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => {
      setIsPlaying(true);
      setIsEnded(false);
    };
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => {
      if (isDraggingRef.current) return;
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / (video.duration || 1)) * 100);
    };
    const onLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };
    const onWaiting = () => setIsLoading(true);
    const onPlaying = () => setIsLoading(false);
    const onEnded = () => {
      setIsEnded(true);
      setIsPlaying(false);
      setShowControls(true);
    };
    const onProgress = () => {
      if (!video.duration || !video.buffered.length) return;
      const end = video.buffered.end(video.buffered.length - 1);
      setBufferedPercent((end / video.duration) * 100);
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("durationchange", onLoadedMetadata);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("ended", onEnded);
    video.addEventListener("progress", onProgress);

    // preload="auto" can finish loading metadata before this effect runs
    // and attaches listeners, so sync up with whatever state the video is
    // already in instead of waiting for events that already fired.
    if (video.readyState >= 1) onLoadedMetadata();
    if (video.readyState >= 3) setIsLoading(false);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("durationchange", onLoadedMetadata);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("progress", onProgress);
    };
  }, []);

  useEffect(() => {
    const onFullscreenChange = () =>
      setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    return () => {
      if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
    };
  }, []);

  const resetHideControlsTimer = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
    hideControlsTimeout.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused && !isDraggingRef.current) {
        setShowControls(false);
      }
    }, 2800);
  }, []);

  const seekFromClientX = useCallback(
    (clientX: number) => {
      const bar = barRef.current;
      const video = videoRef.current;
      if (!bar || !video || !duration) return;
      const rect = bar.getBoundingClientRect();
      const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
      video.currentTime = ratio * duration;
      setProgress(ratio * 100);
      setCurrentTime(ratio * duration);
    },
    [duration]
  );

  const handleBarPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!duration) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    resetHideControlsTimer();
    seekFromClientX(e.clientX);
  };

  const handleBarPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    seekFromClientX(e.clientX);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const handleReplay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === "Space") {
      e.preventDefault();
      togglePlay();
    }
  };

  return (
    <div
      ref={containerRef}
      className="group relative aspect-video w-full select-none overflow-hidden rounded-2xl bg-primary-900 shadow-[0_20px_60px_rgba(15,35,46,0.25)] outline-none"
      onMouseMove={resetHideControlsTimer}
      onMouseLeave={() => isPlaying && !isDragging && setShowControls(false)}
      onClick={togglePlay}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="پخش‌کننده ویدیو"
    >
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full bg-primary-900 object-contain"
        playsInline
        autoPlay={false}
        preload="auto"
      />

      {isLoading && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-white/20 border-t-primary" />
        </div>
      )}

      {!isPlaying && !isLoading && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              isEnded ? handleReplay() : togglePlay();
            }}
            className="pointer-events-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary"
            aria-label={isEnded ? "پخش مجدد" : "پخش"}
          >
            {isEnded ? (
              <ReplayRoundedIcon sx={{ fontSize: 34 }} />
            ) : (
              <PlayArrowRoundedIcon sx={{ fontSize: 40 }} />
            )}
          </button>
        </div>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 pb-3 pt-10 transition-opacity duration-300 sm:px-6 sm:pb-4 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          ref={barRef}
          dir="ltr"
          onPointerDown={handleBarPointerDown}
          onPointerMove={handleBarPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="group/bar relative mb-3 h-4 w-full cursor-pointer touch-none"
          role="slider"
          aria-label="نوار پیشرفت ویدیو"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div className="absolute inset-y-0 left-0 top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-white/25" />
          <div
            className="absolute inset-y-0 left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/45"
            style={{ width: `${bufferedPercent}%` }}
          />
          <div
            className="absolute inset-y-0 left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-primary"
            style={{ width: `${progress}%` }}
          />
          <div
            className={`absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(49,209,176,0.3)] transition-transform ${
              isDragging ? "scale-125" : "scale-100 group-hover/bar:scale-110"
            }`}
            style={{ left: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-white" dir="ltr">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="transition-colors hover:text-primary"
              aria-label={isPlaying ? "توقف" : "پخش"}
            >
              {isPlaying ? (
                <PauseRoundedIcon sx={{ fontSize: 28 }} />
              ) : (
                <PlayArrowRoundedIcon sx={{ fontSize: 28 }} />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="transition-colors hover:text-primary"
              aria-label={isMuted ? "فعال کردن صدا" : "قطع صدا"}
            >
              {isMuted ? (
                <VolumeOffRoundedIcon sx={{ fontSize: 24 }} />
              ) : (
                <VolumeUpRoundedIcon sx={{ fontSize: 24 }} />
              )}
            </button>
            <span className="text-xs tabular-nums text-white/80 sm:text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <button
            onClick={toggleFullscreen}
            className="transition-colors hover:text-primary"
            aria-label={isFullscreen ? "خروج از تمام صفحه" : "تمام صفحه"}
          >
            {isFullscreen ? (
              <FullscreenExitRoundedIcon sx={{ fontSize: 26 }} />
            ) : (
              <FullscreenRoundedIcon sx={{ fontSize: 26 }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
