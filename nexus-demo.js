// Nexus AI Interactive Demo Animations
(function() {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ----------------------------------------------------
  // Helper: Typewriter effect
  // ----------------------------------------------------
  function typeText(el, text, speed, callback) {
    if (reducedMotion) {
      el.textContent = text;
      if (callback) callback();
      return;
    }
    el.textContent = '';
    var i = 0;
    function nextChar() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        el._timer = setTimeout(nextChar, speed);
      } else {
        if (callback) callback();
      }
    }
    nextChar();
  }

  // ====================================================
  // Card 1: DocIntellect AI
  // ====================================================
  function initDocIntellect() {
    var card = document.getElementById('demo-card-1');
    if (!card) return;

    var queryEl = card.querySelector('.demo-query-text');
    var execEl = card.querySelector('.demo-executing');
    var respBox = card.querySelector('.demo-response-box');
    var excerptEl = card.querySelector('.demo-excerpt-text');
    var sourceToggle = card.querySelector('.demo-source-toggle');
    var sourceSnippet = card.querySelector('.demo-source-snippet');
    var replayBtn = card.querySelector('.demo-replay-btn');

    var queryText = 'Summarize section 4.2 of the supplier SLA and list payment penalty clauses.';
    var answerText = 'Standard net payment period is 30 business days. Failure to remit by day 45 incurs a 1.5% compounding monthly surcharge plus suspension of tier-1 SLA guarantees.';

    // Interactive source click
    if (sourceToggle && sourceSnippet) {
      sourceToggle.onclick = function(e) {
        e.preventDefault();
        sourceSnippet.classList.toggle('is-open');
      };
    }

    function run() {
      clearTimeout(card._loopTimer);
      clearTimeout(queryEl._timer);
      clearTimeout(excerptEl._timer);

      // Reset state
      queryEl.textContent = '';
      execEl.style.display = 'none';
      respBox.style.display = 'none';
      if (sourceSnippet) sourceSnippet.classList.remove('is-open');

      if (reducedMotion) {
        queryEl.textContent = queryText;
        respBox.style.display = 'block';
        excerptEl.textContent = answerText;
        if (sourceSnippet) sourceSnippet.classList.add('is-open');
        return;
      }

      // Step 1: Type Query
      typeText(queryEl, queryText, 25, function() {
        // Step 2: Show Execution state
        card._loopTimer = setTimeout(function() {
          execEl.style.display = 'flex';
          card._loopTimer = setTimeout(function() {
            execEl.style.display = 'none';
            respBox.style.display = 'block';
            excerptEl.textContent = '';

            // Step 3: Stream answer
            typeText(excerptEl, answerText, 18, function() {
              // Step 4: Auto-open source citation after answer
              card._loopTimer = setTimeout(function() {
                if (sourceSnippet) sourceSnippet.classList.add('is-open');
                // Step 5: Pause and auto-replay in loop
                card._loopTimer = setTimeout(run, 6000);
              }, 600);
            });
          }, 1400);
        }, 400);
      });
    }

    if (replayBtn) {
      replayBtn.onclick = function() { run(); };
    }

    run();
  }

  // ====================================================
  // Card 2: SmartOps AI (ERP & SLA Graph)
  // ====================================================
  function initSmartOps() {
    var card = document.getElementById('demo-card-2');
    if (!card) return;

    var queryEl = card.querySelector('.demo-query-text');
    var execEl = card.querySelector('.demo-executing');
    var respBox = card.querySelector('.demo-response-box');
    var bar1 = card.querySelector('.demo-bar-1');
    var bar2 = card.querySelector('.demo-bar-2');
    var replayBtn = card.querySelector('.demo-replay-btn');

    var queryText = 'Show high-priority open orders in Warehouse A and graph fulfillment latency.';

    function run() {
      clearTimeout(card._loopTimer);
      clearTimeout(queryEl._timer);

      queryEl.textContent = '';
      execEl.style.display = 'none';
      respBox.style.display = 'none';
      if (bar1) bar1.style.width = '0%';
      if (bar2) bar2.style.width = '0%';

      if (reducedMotion) {
        queryEl.textContent = queryText;
        respBox.style.display = 'block';
        if (bar1) bar1.style.width = '88%';
        if (bar2) bar2.style.width = '74%';
        return;
      }

      typeText(queryEl, queryText, 25, function() {
        card._loopTimer = setTimeout(function() {
          execEl.style.display = 'flex';
          card._loopTimer = setTimeout(function() {
            execEl.style.display = 'none';
            respBox.style.display = 'block';

            // Animate graph bars
            card._loopTimer = setTimeout(function() {
              if (bar1) bar1.style.width = '88%';
              if (bar2) bar2.style.width = '74%';
              card._loopTimer = setTimeout(run, 6000);
            }, 200);
          }, 1400);
        }, 400);
      });
    }

    if (replayBtn) {
      replayBtn.onclick = function() { run(); };
    }

    run();
  }

  // ====================================================
  // Card 3: SQL Database Agent
  // ====================================================
  function initSqlAgent() {
    var card = document.getElementById('demo-card-3');
    if (!card) return;

    var queryEl = card.querySelector('.demo-query-text');
    var execEl = card.querySelector('.demo-executing');
    var respBox = card.querySelector('.demo-response-box');
    var sqlCodeEl = card.querySelector('.demo-sql-code');
    var tableRows = card.querySelectorAll('.demo-table-row');
    var replayBtn = card.querySelector('.demo-replay-btn');

    var queryText = 'Which 5 product SKUs had the highest margin drop compared to last quarter?';
    var sqlText = 'SELECT sku, product_name, margin_delta_pct FROM v_sku_margins ORDER BY margin_delta_pct ASC LIMIT 5;';

    function run() {
      clearTimeout(card._loopTimer);
      clearTimeout(queryEl._timer);
      clearTimeout(sqlCodeEl._timer);

      queryEl.textContent = '';
      execEl.style.display = 'none';
      respBox.style.display = 'none';
      sqlCodeEl.textContent = '';
      tableRows.forEach(function(row) {
        row.style.opacity = '0';
      });

      if (reducedMotion) {
        queryEl.textContent = queryText;
        respBox.style.display = 'block';
        sqlCodeEl.textContent = sqlText;
        tableRows.forEach(function(row) { row.style.opacity = '1'; });
        return;
      }

      typeText(queryEl, queryText, 25, function() {
        card._loopTimer = setTimeout(function() {
          execEl.style.display = 'flex';
          card._loopTimer = setTimeout(function() {
            execEl.style.display = 'none';
            respBox.style.display = 'block';

            // Type SQL query
            typeText(sqlCodeEl, sqlText, 14, function() {
              // Fade in rows one by one
              card._loopTimer = setTimeout(function() {
                if (tableRows[0]) tableRows[0].style.opacity = '1';
                card._loopTimer = setTimeout(function() {
                  if (tableRows[1]) tableRows[1].style.opacity = '1';
                  card._loopTimer = setTimeout(run, 6000);
                }, 300);
              }, 250);
            });
          }, 1400);
        }, 400);
      });
    }

    if (replayBtn) {
      replayBtn.onclick = function() { run(); };
    }

    run();
  }

  document.addEventListener('DOMContentLoaded', function() {
    initDocIntellect();
    initSmartOps();
    initSqlAgent();
  });
})();
