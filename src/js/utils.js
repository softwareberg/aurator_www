import $ from 'jquery';

export function debounce(fn, delay) {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}

export function showModalOnClick() {
  $('#modal-video').on('show.bs.modal', () => {
    const src = '';
    // const src = 'https://www.youtube.com/embed/QIVUl-b2Stk?autoplay=1';
    $('#modal-video').modal('show');
    $('#modal-video iframe').attr('src', src);
  });
}

export function hideModalOnClick() {
  $('#modal-video').on('hide.bs.modal', () => {
    $('#modal-video iframe').removeAttr('src');
  });
}
