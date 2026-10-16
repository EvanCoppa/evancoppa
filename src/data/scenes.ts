import type { Scene } from './site';

// Moody gradient "photographs" used as placeholders until real images exist.
export const scenes: Record<Scene, string> = {
  aurora:
    'radial-gradient(120% 60% at 30% 25%, rgba(60,255,160,.85), rgba(20,140,110,.35) 40%, transparent 65%), radial-gradient(80% 40% at 75% 15%, rgba(120,255,200,.5), transparent 60%), linear-gradient(180deg, #04121a 0%, #062a2a 55%, #050b10 100%)',
  glacier:
    'radial-gradient(90% 50% at 50% 70%, rgba(150,220,255,.9), rgba(40,120,170,.6) 45%, transparent 75%), linear-gradient(180deg, #8fa6b8 0%, #5d7990 35%, #1b3a52 70%, #0c1d2b 100%)',
  road:
    'linear-gradient(180deg, #2b3550 0%, #7a7fa8 30%, #d7a6c2 42%, #3a4458 46%, #1a2130 100%), radial-gradient(10% 60% at 50% 100%, rgba(255,255,255,.25), transparent 70%)',
  falls:
    'linear-gradient(90deg, transparent 38%, rgba(235,245,250,.85) 46%, rgba(255,255,255,.9) 50%, rgba(220,235,245,.8) 54%, transparent 62%), linear-gradient(180deg, #1c2a2c 0%, #34484a 40%, #22302f 70%, #0e1516 100%)',
  lake:
    'radial-gradient(70% 35% at 50% 72%, #2fb6e8, #1376a8 50%, transparent 80%), linear-gradient(180deg, #f2c7d8 0%, #9fb6d9 30%, #3c5d3a 55%, #233a22 100%)',
  stars:
    'radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 70% 20%, #fff, transparent), radial-gradient(1.5px 1.5px at 45% 55%, #fff, transparent), radial-gradient(1px 1px at 85% 65%, #fff, transparent), radial-gradient(1px 1px at 30% 80%, #fff, transparent), radial-gradient(1px 1px at 60% 40%, #dfe, transparent), radial-gradient(60% 30% at 70% 100%, rgba(255,170,60,.45), transparent 70%), linear-gradient(180deg, #050b16 0%, #0b1a2c 60%, #0a1410 100%)',
  cliff:
    'radial-gradient(80% 60% at 20% 80%, rgba(90,110,60,.9), transparent 60%), radial-gradient(70% 50% at 80% 30%, rgba(160,140,100,.7), transparent 60%), linear-gradient(160deg, #3b3a2c 0%, #6f6a4f 40%, #2a3b44 75%, #1b2a33 100%)',
  dusk:
    'radial-gradient(70% 40% at 60% 30%, rgba(255,190,200,.95), rgba(240,150,170,.5) 40%, transparent 70%), linear-gradient(180deg, #3a6ea5 0%, #88a9d1 45%, #e9b4b9 70%, #4b6b85 100%)',
  ocean:
    'radial-gradient(100% 40% at 50% 100%, rgba(30,120,170,.9), transparent 70%), linear-gradient(180deg, #b9c6cf 0%, #7d93a3 40%, #2a5470 70%, #0f2a3c 100%)',
  forest:
    'radial-gradient(60% 50% at 50% 20%, rgba(220,240,200,.5), transparent 60%), linear-gradient(180deg, #8ea58a 0%, #3e5a3c 40%, #1e321f 75%, #0d170e 100%)',
  ember:
    'radial-gradient(50% 40% at 50% 55%, rgba(255,170,90,.95), rgba(210,80,40,.6) 45%, transparent 75%), linear-gradient(180deg, #1a0f0c 0%, #3b1d14 50%, #120a08 100%)',
  fog:
    'radial-gradient(90% 60% at 50% 40%, rgba(230,232,235,.9), rgba(170,175,180,.5) 50%, transparent 80%), linear-gradient(180deg, #9aa1a8 0%, #6e767e 60%, #3b4147 100%)',
};
