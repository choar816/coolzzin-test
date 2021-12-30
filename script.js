const btn_result = document.querySelector('.btn-result');
btn_result.onclick = result;

function result() {
  // yes와 maybe 개수를 셀 변수
  let yes_counter = 0;
  const yes_elements = document.getElementsByClassName('yes');

  for (let i = 0; i < yes_elements.length; i++) {
    if (yes_elements[i].checked) {
      yes_counter++;
    }
  }

  const maybe_elements = document.getElementsByClassName('maybe');
  for (let i = 0; i < maybe_elements.length; i++) {
    if (maybe_elements[i].checked) {
      yes_counter++;
    }
  }

  // 대답안한 문항이 있는지 확인하기
  let no_counter = 0;
  const no_elements = document.getElementsByClassName('no');
  for (let i = 0; i < no_elements.length; i++) {
    if (no_elements[i].checked) {
      no_counter++;
    }
  }

  // 두 카운터를 더했을때 5가 아니면 창을 띄워서 알려주고, 페이지 이동을 중지함
  if (yes_counter + no_counter != 5) {
    alert('선택하지 않은 문제가 있습니다. 모든 문제에 답해주세요.');
    return;
  }

  // Counter에 따라 다른 결과 페이지로 이동하기
  if (yes_counter == 5) location.href = 'result/e4jsl97d.html';
  else if (yes_counter == 4) location.href = 'result/dg0s8dfa.html';
  else if (yes_counter >= 2) location.href = 'result/cl4odifs7.html';
  else if (yes_counter == 1) location.href = 'result/b2ldsio9.html';
  else location.href = 'result/a8ds7fs9.html';
}
