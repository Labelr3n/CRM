import { contactTooltip } from "./createTooltip.js";
import { svgEmail, svgFb, svgOther, svgPhone, svgVk } from "./svg.js";

export const createContactLink = (type, value, element, svg, item) => {
  const setTooltip = contactTooltip(type, value);
  element = document.createElement('a');
  element.classList.add('contacts__link');
  element.innerHTML = svg;

  if (type == 'Email') {
    element.href = `mailto:${value.trim()}`;
  } else if (type === 'Телефон') {
    element.href = `tel:${value.trim()}`;
    setTooltip.tooltipValue.style.color = 'var(--color-whiteFFF)';
    setTooltip.tooltipValue.style.textDecoration = 'none';
  } else {
    element.href = value.trim();
  }

  element.append(setTooltip.tooltip);
  item.append(element); 
}

export const createContactItemByType = (type, value, item) => {
    switch (type) {
      case 'Телефон':
        let phone;
        createContactLink(type, value, phone, svgPhone, item);
        break;
      case 'Facebook':
        let fb;
        createContactLink(type, value, fb, svgFb, item);
        break;
      case 'VK':
        let vk;
        createContactLink(type, value, vk, svgVk, item);
        break;
      case 'Email':
        let Email;
        createContactLink(type, value, Email, svgEmail, item);
        break;
      case 'Other':
        let other;
        createContactLink(type, value, other, svgOther, item);
        break;
        default:
          break;
    }
}

export const formatDate = data => {
  const newDate = new Date(data);

  const correctDate = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }

  const resultDate = newDate.toLocaleString('ru', correctDate);

  return resultDate;
}

export const formatTime = data => {
  const newTime = new Date(data);

  const correctTime = {
    hour: 'numeric',
    minute: 'numeric'
  }

  const resultTime = newTime.toLocaleString('ru', correctTime);

  return resultTime;
}
