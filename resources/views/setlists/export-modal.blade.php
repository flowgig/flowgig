<div class="modal export-setlist-modal">
    <div class="modal-container">
        <div class="modal-header">
            Export setlist:
            <button class="modal-close toggle-modal"
                    value="export-setlist-modal"></button>
        </div>
        <div class="modal-content">
            <p>Toggle fields in setlist</p>
            <form action="{{ route('setlists.export', $setlist) }}" method="POST" target="_blank">
                {{ csrf_field() }}
                <div class="input-group">
                    <input type="checkbox" name="number_in_list" id="number_in_list"/>
                    <label for="number_in_list">Number in list</label>
                </div>
                <div class="input-group">
                    <input type="checkbox" name="key" id="key" checked/>
                    <label for="key">Key</label>
                </div>
                <div class="input-group">
                    <input type="checkbox" name="bpm" id="bpm"/>
                    <label for="bpm">BPM</label>
                </div>
                <input type="checkbox" name="duration" id="duration"/>
                <label for="duration">Duration</label>
                <div class="input-group">
                    <input type="checkbox" name="intensity" id="intensity"/>
                    <label for="intensity">Intensity</label>
                </div>
                <div class="input-group">
                    <input type="checkbox" name="comment" id="comment" checked/>
                    <label for="comment">Comment</label>
                </div>
                <div class="input-group float-right">
                    <button type="submit" class="button button-flat button-default tooltip"
                            title="Export {{ $setlist->gig->name }} to PDF">
                        <label for="export">Export to PDF</label>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
