

function replaceDateWithDuration(element) {
  const dateString = element.getAttribute('data-date');
  const dateSince = new Date(dateString);
  const diffInMs = new Date().getTime() - dateSince.getTime();

  const diffInYears = diffInMs / 1000 / 60 / 60 / 24 / 365;

  element.innerHTML = `${diffInYears.toFixed(1)} years`;
}

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-date]');
  for (const element of elements) {
    replaceDateWithDuration(element);
  }
});
