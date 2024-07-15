"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const animation = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: '50%',
      cy: '23%',
    },
    svg: {
      transform: 'rotate(40deg)',
      transition: 'transform 0.3s',
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: '100%',
      cy: '0%',
    },
    svg: {
      transform: 'rotate(30deg)',
      transition: 'transform 0.3s',
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: { mass: 4, tension: 250, friction: 35 },
};

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme("light")
  const [isDarkMode, setDarkMode] = useState(false);


  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark":"light")
    setDarkMode(!isDarkMode)
  }
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <DarkModeSwitch
    style={{ transition: 'transform 0.1s'}}
    animationProperties={animation}
    checked={isDarkMode}
    onChange={toggleTheme}
    size={21}
    moonColor='#001491'
    sunColor='#00eaff'
  />
  )
}

export default DarkModeButton