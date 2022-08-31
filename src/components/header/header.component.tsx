import { HeaderProps } from './header.props'
import { HeaderStyleComponent } from './header.styles'
import { Search } from '../search/search.component'

export const Header: React.FC<HeaderProps> = ({
  setUsers,
}: HeaderProps): JSX.Element => {
  return (
    <HeaderStyleComponent>
      <a href='https://youritsoft.com/' target='_blank'>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAABbCAYAAACLbssvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABJeSURBVHgB7Z3JbxzHFcarucgCvI28IYroqPUXmAyQ2EIQeHiJfRN1NJCIQ2S5apRDbrFGhwC5kco5gYYKfAgSQNQxJ9JAAlmxYVKJAwRIkGnZFBxYkjlObIcRRXbeN/OarKmp6mXWHvH9gAbZe09X1devXr2qUipnhGFYoOUiLbWwyTotJSUIghDBwhCyUFzTBOOKEgRBgOXAolAxtl/j7UUlCMLhhoRgFWpg2e6zUCylvE5UfVnl5TyuoQRBGH24UG9ZthfSVj9YVGp8/BYvUVXGV4IgDAcuyGUUZFQbOi2QsBhsVQy2CMI0Ts3IKtGP5WcDq0oQhMFjfMF1Lma5zo2vlPxb3/5JbeezLyJLAP6KIlchIougkOJZrJaH5ucoKEEQBgsX4K3IkqBlOjxouSimuQZE4uaL87WbU/PhX177abj90V1TdGpprBS+N6hY9lV430klCEImPNUFVOjm6M81Wi54nrekbcdXu0bLBm2fjbsGRGJskqoEofL17S+++cbl4z98bYP+Degaayrd8+C+8HGsmfflakeRlmO0r64EQUjNmOqOaf67pm/kghjQ4sed7BKJPeVd+uqPXi/TdappRQK8O1Va3Pr9+/g3qrL4vCyqpkhURSQEITvdCkXAf33LPnzdnYUyTiROb1YrKiN/OjF/JfRU6Z8//qX68q8fYlNFNa0aLGXVFLMLShCEzHQrFCuqKQaLkQ8hbLaA4Avu337zrQIEwTypXyKB/3f//aX64PU31e2LbwW0epmXWVRFxJoQhM7oykcBuBkyamUIVNOSKKAK8Pcf/AJ3CPZ2vNnT/6piX19F4uCh6J67B/cUBKE7uhYKwNZEhZaTD+//R334s98U7/32D/pdGmKBf0UkBGH06IlQmNyYKlXGlBFH4bE/Q0RCEEaOvggFsIqFgYiEIIwGfRMKECcWIhKCMDp02+oRC4QAgmDZVVcPVVVlRERCEIZDX4UCOMSiAKemrenUhYiEIAyPvlY9dFwOTr3p1IWIhCAMl4EJBehELEQkBGH4DFQoQBaxEJEQhHwwcKEAacRCREIQ8sNQhALEicX4eHhRREIQ8sO+UPAgM+g2jr4aGEdiRfUZR5xFnZ/hABEJQRgqDaHgYesqxr5ANXtdBkkXWS+UCg+eCK8c+dxbmKlXM/XQTIzgFJEQhKEzxr0/K7RgNCl03JqhBXEPvjroFeoEIrHzRGP0qLmdx8NVrKsMxARliUgIA6dWqxU+/vhjXwktTNByXh1YD5E1sMHDymH066JrlKlIJEIe6Yr8CtMNsVCl2SyWxXgYngxNb0mfReLTTz9dNcb0rI+NjZ06duxY5jErLNdSfK1ACQ1uTH23OKbGD0ZBJ3/Uyx8tnzrYf44sSy/TgMxxUHZa++bm8mzScXfv3i1SWp2hPF7kXtCND939+/fxp07bN/b29pZ3dnbWjh8/HqgRQPtNc/hN9PyXnn/++YrtWPqdLfPo0Hk+5dvb5nGIzEQhv2UZ1GWN//rKRQHluZVILNJGXb47dW4ojsvd3d22aNGHDx+WVUaQKJZBhKsiEvkGVgMEngoGxAvTOUT+OZ0CfyivHDlyZH1ra6tnQtYPLL/JVz0CQgGBsI1MHb005xd2JqjWj0w0xpnY0LdDLNKEaEMkqNpRadk4oOoGKeyaaSnRCz5PmSFT1Wl8fLwt89B1Likht3zyySfTKPhhtikqC/RlrqAgZs0jg4B/02rYp2k3IRQYKm461ObhYHW9+L/Nexiw9kzcBVxigXEn4sRimCIRAZPS2JTJqhBrYvTAV5fEHSPHd1TYea6ZXE2Yrf0mX/UJj30R63yTQDUtiIbPAUPZYUg7L1Qbk194sX6HdZ9aPh42nJrTrXdoj7rMg0hEUB0Ng+/62qbUvgo6FxmmpG8T34SdRB8FPigTMRk93CuNed78/umUJ3c9zzlY8l6o6t+6U90wt9v8SY3Lh+GaalbBA/q/DrOd/n+JFuRn33KLC88+++ySygG2fEjU6UN4GT4WEpENV55M66OImkcLfCMkRKG+9me1+fPf+TyadfNAJMyudzauIKcRizyJBLh3714JdVB9W5zzJwIqTqZezdhcpcyzoIQ2koQi+fxWZ2daZ6UOO/nMaSUDSu8FVEVt51A1wycrs0TntcX7dOr87iWOfLhBzzab8mOX2pnZmIcDE/jQMkPLqb+9sTj75QcfBvqBafwOqIa8vLk8sxeGrSY9V0Nuvji/mCeRAKS20Uji+6TxVVDitPkmLFUZIUdQus5bts26RALgS4yPBj4exq6OnN+9ZmJiYs7YFNBvOttrAbOOR4FCi8KrMvod9s+/c7VkEwtaysa2ocdJ4IXCRDM2x2YCbmcv6dtgusZlOCEXtFi6lGbX01YTIRam85s+Mq+qIcNVo33oN93qR9V3wrUDhZeqErNtVYkDsYgt4BCLGyfOKb1e2UKOgqlIlZdILBBPsm9FsFWxZFNmmzVBCZTY0oFgnieffHKOEvdVbrdvTG2guL2e1tFmfz2L4KDOrbQ6NF3jctq6M1W7ltDeHq3j3s8991w56Tc89dRTqK6d0ZsUo+d/8ODBpRzHG/j6Cp5XZYCa1K/T+ypq5xdheab5ekfvjf59SU97jnyGX4Sq9rvLL7zwQqpnonSv8TO0WL7IW9E+7Tn38wTtg9NzWtunjGPX6JhoNXjmmWeao+erGJKqEn88UZqOO99qWTB7nreQl4jLGKuiZB7biTWBTII2eMooNfaHlPTgHsXt9fS3jDo0HKzwnagUaNMm+hxck8WbX9DPpWd7Ou5g1PHpN8DxvcjPW9CeA3mhhPoyPf9iHpsQldHSQc8cqAzQB2XF3EaFuxh3jp72tIqJsVrSnt89rlEmC2WdCul6mrSP0kzZYz/i8kTLftd1zf2phsJDgQ9V2FqQSCwmvM7FYswLr2QZCq/fwKpQFl+FeZzNmiCcvgm0b6NwoQ1epW+SQ6G9gkyTl3Biyuzz7Aj0Uxxept+7qPJHS/rSO84kZjDpyWI6pS9UuNdcx7Ow1rKkPQQXaY+WjDyJbeoxM1/ZvFq2jX1JYrH+3tcW5uPObYiFeW5Kf8egcFgVvq7uNmuCCMhcr9quiYxCGSlt4WoDmQZBNMMWC/wOejfVlIejaXEhp60/LUJBaXNGZQTVKn1xVTtgRbCwdlrYS/TOc/OhmMhyMDpw3ZgqKbO35y5londOfO/YK3d+vZTp3JT+jkHh8FVABKv4P4tvAglM57oCe1CYVmi5ze32fuS3sBzrs1jMDqvuT7/DFmCE3wBLCkMSwJyFz+JtvMNhNxm6wPPRs/raehEi2GsnNInEebYibDTeW9QrG9WCpLSn682Y7xRijL90HvKkr+2q4nfqx1Ka7Ps94GfRe4TT/yXjuvutgHq3jkxCAVxi4Xlji+9OnXv6G5tXL2U6F2IxEa5TFWbWFiAzSJAYlHEu623mUWYif0VAq0XjFKs1gXopEli1i0SdYzSsghrTZu8/9thjKKyZ4gZ6AVtUvrHZ1k6fyoE6TCgtq57hXMdXn957ZXt7e7kXQowPhEMkEuM1qBBXvHbnP66H/NASXBblO6qezuu+BLrG2+QQrSoHZt6jKk5JXycrq+yMo8gKCnwYtkfFIUYCAVVJ5zqqMIn+jkFg81WgP8fRo0eRgL6+3WVNFAoFU+UB2rdnXCIBojZ7SuwZ8xkgWGkdnL3EEnsQpA3myRu2/j0ABZudsDW0IsE/QB+HCr3vOfiYVAbY6jQ/EBuc9muu85D2VPhLyhAEpoyPlRoiHc/r8cqd6tJe6LXVQ0ddLFAAQsP5ikJKmalsHGq1JviL0nYsF65ApQBNZHSNs+Z2W8BQvzHDnSGOoygSESQUyLOu549aIBpWHR17DS0REBAWj2LctV0+rCzCys2YbWJh63w4SLqaAOj0nWr1Yei1ff0gFhgcN/bcHIsFJYrtq282rVmticnJyaK5jQtXoDKAr49NsAb5ZYE5bG4jARtq9bBbkA74uivFk2anw1dN8VhFHILLwWjzYXVifUEsTMsnitlQQ6LrmcLgVyCxmEUAlb4dY0zcnJq/FjfiVV7FApkpdMR/MM6WDpup7jo2CYdgFdUQISHcUiNOJBYclh1kOZfyxRz8T44qSdE4dq3TKEnLeClqZ2dnTg2JnkwpCLFohHyHbS89cXi8GLFIbHbtJ45C2iCMicLkwCN9/brqEMpk+Hq3fMHNkF2hM/CVhz+Ivt6nSDBmIRrcErWmksUD3bpbmq35f984ruO+P+zPMON6hpb2PZt7dL9/SLtlMf3gyXA9Ll7CNW4mml2HJRYopI4hAANXkA2bhqYoWo9NC2L39XV0fVZCT0GhhGiQ5XeWllmIBy0enMpohmTxMCnoVQ1ygvvmAT2opgXGuq+GRE8nKXaJRZrgqjyKhc38I1ZizMk2ywljG6guyBpmLPQOOJVRbYR42FqiiLk4v0G31TTLCPhPqyHR89nMIRZHJhsOzsw9T/MmFrbmLMowt1QGsoYJ9/p8oTc4WqLQH6if1YHRC+HOgjY83krLjpRiYYvRILFYykOcRRxsaZjxD109M9VLXzKuFyhhKOgRjhFRsBPtC8x9bIV0jNlpK80cO/2iL0IBuOfpWWvP02YkprMAOWI0CpNemMeORi2gu7W+3s2YBXCQhe3DtmWyaIQmGMlJX6iZuawyws2cgb4tCgm3fSS6iXvhZnBf32aGZg+SvglFhLVDWIomUMRomGIRmkPs5RCE0Orr3cQ+OPqWrBibzMx5UqUky7GPAIG+0kmHMMY31vffv9nChabUTjt12UQmrqdqv+m7UABXE2iShQCxCFsdo4X3T30/15mbQ8BbQKeqrMEyrig/029itoqoBAebfv2wT0O75xFLIS5mLcSOEPoN7ZpVcyf30ckE36ekb+smJqMXDEQogE0syEIo3pgqFdUjhC0EXDVDg1PPB8EDpq6a2x3xG6aFUeBORLF0koFHGYsllukdIE24p6ZOXRduW18SCBKPkp0KBHLRNdo+oGGKEdT6ycCEAjTEwihEXrj7yAUQoQeesjg1Mb5AUjUEXZQxOY2ydCqzRXiyORoYm8uuWa3QsxVhyIfJmgCuQoxOYEmWBdKMhds8rk18qBXE1qmrhP4icfeJRsJC3xLV3tpRHfZ4rJm7mXeNZwZkPXrNf9xd/axlaHif+wugH8f1KCAHTaAYk0A1ByuxvY9GxyLXvchUvYAOTPp29IhEF2KMDB55yzlYq2SOs3hYQFyMPuYlgFig5yilCaIy39bSxOd0OeMQ1cA2IxyaUem9QyxMq8CPuU8jXWLSfqjWBBi8UBwS8AWgArxgzhkCOONhjok0l6rz8OuB6wCyNFboXpjsxRy6z7eMbXFoQZqQgF+yvRM4HunPnJkm5uCz2vYLrjRBpy66TyHLfRxk6nXcTwZa9ThsoKpAGQNBOoHqjEbnJe7zkXQvTEp7WWWjq6jRUcQxR0cW6mSZLECcVcJ9lH1siVTAeZkXkQAiFH0GGQoJntAb1aQxEhaLRJD2JB5qH5kz6Rxc/0I3HdZGGRRiHkouyHIeF96ZuBGkdGBZYDaxDtL+AsLG8yISQKoeyQT6CiV85q8wJ3gJQ65RJpjD+JKWMRLRWoKOaJg7AlMTdvS1R+ak+6zwMPLzxn0wHNsymnBxfYzipLROa3SsLZgrUD1gPJyoh+ogqtTLXEjx3g/OD7XxHDuBHcNVboo8EzPHaABBRatJJw5FPe0pTcrsizId+HXueLYM53SWtKf0vK1HbHaQP4M0B3lqwJhzSO6p8NLpzasV1/HvnJived5BAk5OTvhfr/3qtnoEiLzgR48erfdz1KioWXaUR6YaBHhP29vb+w7FfqbLoNK+V4hFMUQGNaq2CEQ6+D0N5F3leDY1K+KjEAQhEREKQRASEaEQBCEREQpBEBIRoRAEIRERCkEQEhGhEAQhkYHHURz9fGxpu9CcHbyxXvekjV8Qcs7AhWKmXq2r+uHrjCQIo4xUPQRBSESEQhCEREQoBEFIRIRCEIRERCgEQUhEhEIQhEREKARBSESEQhCEREQoBEFIRIRCEIRERCgEQUgk94PrThQeV8e+M9P4/8HmPfXf9/6hBEEQ9gnD8PzOZ1+EBtcO69yZgiAYYH5OFoYaLWVer/K2VSUIggAxYFHwje1LvL2oBEEYCHl2ZmLatTV9ujRmjf/6ShCEgZBnocDgNjZfREHbLwjCYUarYpS1bT77LNqqJIIgHELQsqGJAvwVV2jZ4vWKEgRBAGxBVDWBgGDMKUEQBsr/AX09KjSvwRTXAAAAAElFTkSuQmCC' />
      </a>
      <Search setUsers={setUsers} />
    </HeaderStyleComponent>
  )
}
